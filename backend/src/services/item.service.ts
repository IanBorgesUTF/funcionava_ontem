import { prisma } from '../config/prisma';

export const getAllItensService = async () => {
  return prisma.item.findMany({
    include: {
      tipo: { select: { id: true, descricao: true } },
      tamanho: { select: { id: true, descricao: true } },
      condicao: { select: { id: true, descricao: true } },
    },
  });
};

export const getItemByIdService = async (id: number) => {
  const item = await prisma.item.findUnique({
    where: { id },
    include: {
      tipo: { select: { id: true, descricao: true } },
      tamanho: { select: { id: true, descricao: true } },
      condicao: { select: { id: true, descricao: true } },
    },
  });

  if (!item) {
    throw new Error('Item não encontrado.');
  }

  return item;
};

export const updateItemQuantidadeService = async (id: number, quantidade: number) => {
  const item = await prisma.item.findUnique({ where: { id } });
  if (!item) {
    throw new Error('Item não encontrado.');
  }

  return prisma.item.update({
    where: { id },
    data: { quantidadeEstoque: quantidade },
    include: {
      tipo: { select: { id: true, descricao: true } },
      tamanho: { select: { id: true, descricao: true } },
      condicao: { select: { id: true, descricao: true } },
    },
  });
};
