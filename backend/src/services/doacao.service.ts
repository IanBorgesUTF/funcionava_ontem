import { prisma } from '../config/prisma';
import { CreateDoacaoBody, ItemDoacaoInput } from '../validators/doacao.validator';
import { Prisma } from '@prisma/client';

export const createDoacaoService = async (input: { voluntarioId: number; itens: ItemDoacaoInput[] }) => {
  const { voluntarioId, itens } = input;

  const voluntario = await prisma.voluntario.findUnique({ where: { id: voluntarioId } });
  if (!voluntario) {
    throw new Error('Voluntário não encontrado.');
  }

  try {
    const novaDoacao = await prisma.$transaction(async (tx) => {
      const doacao = await tx.doacao.create({
        data: { voluntarioId },
      });

      for (const itemDaDoacao of itens) {
        const itemNoCatalogo = await tx.item.upsert({
          where: {
            tipoId_tamanhoId_condicaoId: {
              tipoId: itemDaDoacao.tipoId,
              tamanhoId: itemDaDoacao.tamanhoId,
              condicaoId: itemDaDoacao.condicaoId,
            },
          },
          update: {
            quantidadeEstoque: {
              increment: itemDaDoacao.quantidade,
            },
          },
          create: {
            quantidadeEstoque: itemDaDoacao.quantidade,
            tipo: { connect: { id: itemDaDoacao.tipoId } },
            tamanho: { connect: { id: itemDaDoacao.tamanhoId } },
            condicao: { connect: { id: itemDaDoacao.condicaoId } },
          },
        });

        await tx.itemDoacao.create({
          data: {
            doacaoId: doacao.id,
            itemId: itemNoCatalogo.id,
            quantidade: itemDaDoacao.quantidade,
          },
        });
      }

      return tx.doacao.findUnique({
        where: { id: doacao.id },
        include: {
          itens: {
            include: {
              item: true,
            },
          },
        },
      });
    }, { timeout: 10000 });

    return novaDoacao;
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      throw new Error('Referência inválida para tipo, tamanho ou condição.');
    }
    throw error;
  }
};

export const getAllDoacoesService = async () => {
  return prisma.doacao.findMany({
    include: {
      voluntario: {
        select: { id: true, nome: true, email: true } // Traz quem registrou
      },
      itens: {
        include: {
          item: { // Traz os detalhes do item (descrição, tipo, etc.)
            include: { tipo: true, tamanho: true, condicao: true }
          }
        }
      }
    },
    orderBy: { createdAt: 'desc' } // Mais recentes primeiro
  });
};

// 2. Buscar Doação por ID
export const getDoacaoByIdService = async (id: number) => {
  const doacao = await prisma.doacao.findUnique({
    where: { id },
    include: {
      voluntario: { select: { id: true, nome: true } },
      itens: {
        include: {
          item: {
            include: { tipo: true, tamanho: true, condicao: true }
          }
        }
      }
    }
  });

  if (!doacao) throw new Error('Doação não encontrada.');
  return doacao;
};

// 3. Deletar Doação (Com Estorno de Estoque)
export const deleteDoacaoService = async (id: number) => {
  // Primeiro, precisamos saber o que foi doado para retirar do estoque
  const doacao = await prisma.doacao.findUnique({
    where: { id },
    include: { itens: true }
  });

  if (!doacao) throw new Error('Doação não encontrada.');

  // Usamos transação para garantir que o estoque seja corrigido e a doação apagada
  return prisma.$transaction(async (tx) => {
    // Para cada item que foi doado, vamos DECREMENTAR o estoque
    for (const itemDoado of doacao.itens) {
      const item = await tx.item.findUnique({ where: { id: itemDoado.itemId } });
      if (!item) {
        throw new Error('Item não encontrado para estornar doação.');
      }
      const novaQuantidade = item.quantidadeEstoque - itemDoado.quantidade;
      if (novaQuantidade < 0) {
        throw new Error('Estoque insuficiente para estornar doação.');
      }
      await tx.item.update({
        where: { id: itemDoado.itemId },
        data: { quantidadeEstoque: novaQuantidade }
      });
    }

    // Agora que o estoque foi corrigido, podemos apagar o registro
    // O 'onDelete: Cascade' no banco cuidaria dos ItemDoacao,
    // mas se não tiver configurado, apagamos manualmente:
    await tx.itemDoacao.deleteMany({ where: { doacaoId: id } });

    return tx.doacao.delete({ where: { id } });
  });
};
