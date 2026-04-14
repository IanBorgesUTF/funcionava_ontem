import { prisma } from '../config/prisma';
import { BeneficiarioSchemaType } from '../validators/beneficiario.validator';

export const createBeneficiarioService = async (data: BeneficiarioSchemaType) => {
    // Verifica se o CPF já existe
    const cpfExistente = await prisma.beneficiario.findUnique({
        where: { cpf: data.cpf },
    });

    if (cpfExistente) {
        throw new Error('Este CPF já está cadastrado.');
    }

    return prisma.beneficiario.create({
        data,
    });
};

export const getAllBeneficiariosService = async () => {
    return prisma.beneficiario.findMany();
};

export const getBeneficiarioByIdService = async (id: number) => {
    const beneficiario = await prisma.beneficiario.findUnique({ where: { id } });
    
    if (!beneficiario) {
        throw new Error('Beneficiário não encontrado.');
    }
    return beneficiario;
};

export const updateBeneficiarioService = async (id: number, data: BeneficiarioSchemaType) => {
    // Verifica se o beneficiário existe
    const beneficiarioExiste = await prisma.beneficiario.findUnique({
        where: { id },
    });

    if (!beneficiarioExiste) {
        throw new Error('Beneficiário não encontrado.');
    }

    // Verifica se o novo CPF já está em uso por OUTRO beneficiário
    const cpfExistente = await prisma.beneficiario.findUnique({
        where: { cpf: data.cpf },
    });

    if (cpfExistente && cpfExistente.id !== id) {
        throw new Error('Este CPF já está cadastrado.');
    }

    return prisma.beneficiario.update({
        where: { id },
        data, // dataAtualizacao é atualizado automaticamente pelo Prisma (@updatedAt)
    });
};

export const deleteBeneficiarioService = async (id: number) => {
    const beneficiario = await prisma.beneficiario.findUnique({ where: { id } });
    if (!beneficiario) {
        throw new Error('Beneficiário não encontrado.');
    }

    // Verifica se o beneficiário tem registros associados (conforme MER)
    const cartoesAssociados = await prisma.cartaoBeneficiario.count({
        where: { beneficiarioId: id },
    });

    const distribuicoesAssociadas = await prisma.distribuicao.count({
        where: { beneficiarioId: id },
    });

    // Impede a exclusão se houver cartões ou distribuições
    if (cartoesAssociados > 0 || distribuicoesAssociadas > 0) {
        throw new Error('Este beneficiário possui cartões ou distribuições associadas e não pode ser removido.');
    }

    return prisma.beneficiario.delete({ where: { id } });
};