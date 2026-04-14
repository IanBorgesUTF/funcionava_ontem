import { prisma } from '../config/prisma';
import { CreateCartaoSchemaType } from '../validators/cartao.validator';
// Importa as novas funções de geração
import { generateCardNumber, generateCVV } from '../utils/cartao.utils';

export const createCartaoService = async (data: CreateCartaoSchemaType) => {
    // 1. Verificar se o beneficiário existe
    const beneficiario = await prisma.beneficiario.findUnique({
        where: { id: data.beneficiarioId },
    });
    if (!beneficiario) {
        throw new Error('Beneficiário não encontrado.');
    }

    // 2. Verificar se já existe cartão
    const cartaoExistente = await prisma.cartaoBeneficiario.findUnique({
        where: { beneficiarioId: data.beneficiarioId },
    });

    const hoje = new Date();

    // 3. Gerar um número de cartão ÚNICO
    let numeroCartao: string;
    let numeroEmUso = true;
    
    // Loop de segurança contra colisão (extremamente raro, mas vital)
    while (numeroEmUso) {
        numeroCartao = generateCardNumber();
        const cartaoComNumero = await prisma.cartaoBeneficiario.findUnique({
        where: { numeroCartao },
        });
        // Se não encontrou (null), o número é único e o loop para
        if (!cartaoComNumero) {
        numeroEmUso = false;
        }
    }

    // 4. Gerar o CVV
    const codigoSeguranca = generateCVV();

    // 5. Calcular a data de validade (1 ano a partir de agora)
    const dataValidade = new Date();
    dataValidade.setFullYear(dataValidade.getFullYear() + 1);

    // 6. Se existir e estiver vencido, renova; se existir e for válido, bloqueia; se não existir, cria
    if (cartaoExistente) {
        if (cartaoExistente.dataValidade < hoje) {
            return prisma.cartaoBeneficiario.update({
                where: { id: cartaoExistente.id },
                data: {
                    numeroCartao: numeroCartao!,
                    codigoSeguranca,
                    dataValidade,
                    ativo: true,
                },
            });
        }
        throw new Error('Este beneficiário já possui um cartão válido.');
    }

    return prisma.cartaoBeneficiario.create({
        data: {
            beneficiarioId: data.beneficiarioId,
            dataValidade,
            numeroCartao: numeroCartao!,
            codigoSeguranca,
            ativo: true,
        },
    });
};

export const getAllCartoesService = async () => {
    return prisma.cartaoBeneficiario.findMany({
        include: {
        Beneficiario: { // Inclui o nome do beneficiário na listagem
            select: { nome: true }
        }
        }
    });
};

// Um método mais útil: buscar o cartão pelo ID do *Beneficiário*
export const getCartaoByBeneficiarioIdService = async (beneficiarioId: number) => {
    const cartao = await prisma.cartaoBeneficiario.findUnique({
        where: { beneficiarioId },
        include: {
        Beneficiario: {
            select: { nome: true, cpf: true }
        }
        }
    });

    if (!cartao) {
        throw new Error('Nenhum cartão encontrado para este beneficiário.');
    }
    return cartao;
};

// Rota dedicada para ativar/desativar o cartão
export const updateCartaoStatusService = async (id: number, ativo: boolean) => {
    const cartao = await prisma.cartaoBeneficiario.findUnique({ where: { id } });
    if (!cartao) {
        throw new Error('Cartão não encontrado.');
    }

    return prisma.cartaoBeneficiario.update({
        where: { id },
        data: { ativo },
    });
};

export const deleteCartaoService = async (id: number) => {
    const cartao = await prisma.cartaoBeneficiario.findUnique({ where: { id } });
    if (!cartao) {
        throw new Error('Cartão não encontrado.');
    }

    // A tabela CartaoBeneficiario não tem dependentes, pode ser deletada.
    return prisma.cartaoBeneficiario.delete({ where: { id } });
};
