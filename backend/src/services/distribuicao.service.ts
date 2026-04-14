import { prisma } from '../config/prisma';
import { CreateDistribuicaoSchemaType } from '../validators/distribuicao.validator';

/**
 * Cria uma nova distribuição, registrando os itens e dando baixa no estoque.
 * Este processo é transacional.
 */
export const createDistribuicaoService = async (data: CreateDistribuicaoSchemaType, voluntarioId: number) => {
    const { beneficiarioId, itens, cartaoNumero } = data;

    // --- 1. Verificações Prévias (Fora da Transação) ---

    // Verificar se o voluntário e o beneficiário existem
    const [voluntario, beneficiario] = await Promise.all([
        prisma.voluntario.findUnique({ where: { id: voluntarioId } }),
        prisma.beneficiario.findUnique({ where: { id: beneficiarioId }, select: { id: true, limiteItens: true } })
    ]);

    if (!voluntario) throw new Error('Voluntário não encontrado.');
    if (!beneficiario) throw new Error('Beneficiário não encontrado.');

    // Beneficiário só pode receber se tiver cartão válido (ativo)
    const cartao = await prisma.cartaoBeneficiario.findUnique({
        where: { beneficiarioId },
    });
    if (!cartao || !cartao.ativo || cartao.numeroCartao !== cartaoNumero) {
        throw new Error('Cartão do beneficiário inválido ou inativo.');
    }

    // Verificar estoque para TODOS os itens da lista, buscando pelo composto (tipo/tamanho/condição)
    const itensNoBanco = await prisma.item.findMany({
        where: {
            OR: itens.map((i) => ({
                tipoId: i.tipoId,
                tamanhoId: i.tamanhoId,
                condicaoId: i.condicaoId,
            })),
        },
    });

    const estoqueMap = new Map(
        itensNoBanco.map(item => [
            `${item.tipoId}-${item.tamanhoId}-${item.condicaoId}`,
            { id: item.id, quantidade: item.quantidadeEstoque }
        ])
    );

    for (const item of itens) {
        const key = `${item.tipoId}-${item.tamanhoId}-${item.condicaoId}`;
        const registro = estoqueMap.get(key);

        if (!registro) {
            throw new Error('Não encontramos esse item no estoque para a combinação de tipo, tamanho e condição informada. Confira se ele está cadastrado e com estoque disponível.');
        }
        if (registro.quantidade < item.quantidade) {
            throw new Error(`Estoque insuficiente para este item. Disponível: ${registro.quantidade}, solicitado: ${item.quantidade}.`);
        }
    }

    // Verificar limite de itens do beneficiário (0 = sem limite)
    if (beneficiario.limiteItens && beneficiario.limiteItens > 0) {
        const jaDistribuido = await prisma.itemDistribuicao.aggregate({
            _sum: { quantidade: true },
            where: {
                distribuicao: {
                    beneficiarioId: beneficiarioId,
                },
            },
        });
        const totalAtual = jaDistribuido._sum.quantidade ?? 0;
        const totalSolicitado = itens.reduce((acc, i) => acc + i.quantidade, 0);
        if (totalAtual + totalSolicitado > beneficiario.limiteItens) {
            throw new Error(`Limite de itens excedido para este beneficiário. Limite: ${beneficiario.limiteItens}, já distribuído: ${totalAtual}, solicitado agora: ${totalSolicitado}.`);
        }
    }

    // --- 2. Início da Transação ---
    // Se todas as verificações passarem, executa a transação.

    return prisma.$transaction(async (tx) => {
        // a. Criar o registro principal da Distribuição
        const distribuicao = await tx.distribuicao.create({
            data: {
                voluntarioId,
                beneficiarioId,
            },
        });

        // b. Criar os registros em ItemDistribuicao (o "recibo")
        const itensDistribuidos = [];
        for (const item of itens) {
            const key = `${item.tipoId}-${item.tamanhoId}-${item.condicaoId}`;
            const registro = estoqueMap.get(key);
            if (!registro) {
                throw new Error('Não encontramos esse item no estoque para a combinação de tipo, tamanho e condição informada.');
            }

            await tx.itemDistribuicao.create({
                data: {
                    distribuicaoId: distribuicao.id,
                    itemId: registro.id,
                    quantidade: item.quantidade,
                },
            });

            await tx.item.update({
                where: { id: registro.id },
                data: {
                    quantidadeEstoque: {
                        decrement: item.quantidade,
                    },
                },
            });

            itensDistribuidos.push(registro.id);
        }

        return distribuicao; // Retorna a distribuição criada
    });
};

/**
 * Lista todas as distribuições com detalhes.
 */
export const getAllDistribuicoesService = async () => {
    return prisma.distribuicao.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            voluntario: {
                select: { nome: true },
            },
            beneficiario: {
                select: { nome: true },
            },
            // Pega os itens da distribuição e seus detalhes
            itens: {
                select: {
                    quantidade: true,
                    item: {
                        select: {
                            id: true,
                            tipo: { select: { descricao: true } },     // ex: "Camisa"
                            tamanho: { select: { descricao: true } }, // ex: "M"
                            condicao: { select: { descricao: true } } // ex: "Novo"
                        }
                    }
                }
            }
        }
    });
};

/**
 * Busca uma distribuição específica pelo ID.
 */
export const getDistribuicaoByIdService = async (id: number) => {
    const distribuicao = await prisma.distribuicao.findUnique({
        where: { id },
        include: {
            voluntario: { select: { nome: true } },
            beneficiario: { select: { nome: true } },
            itens: {
                select: {
                    quantidade: true,
                    item: {
                        select: {
                            id: true,
                            tipo: { select: { descricao: true } },
                            tamanho: { select: { descricao: true } },
                            condicao: { select: { descricao: true } }
                        }
                    }
                }
            }
        }
    });

    if (!distribuicao) {
        throw new Error('Distribuição não encontrada.');
    }
    return distribuicao;
};
