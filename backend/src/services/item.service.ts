import { prisma } from '../config/prisma';

export const getAllItensService = async (
  q?: string,
  tipoId?: number,
  tamanhoId?: number,
  condicaoId?: number
) => {
  const where: any = {};

  if (q) {
    where.OR = [
      { tipo: { descricao: { contains: q, mode: 'insensitive' } } },
      { tamanho: { descricao: { contains: q, mode: 'insensitive' } } },
      { condicao: { descricao: { contains: q, mode: 'insensitive' } } },
    ];
  }

  if (tipoId) {
    where.tipoId = tipoId;
  }

  if (tamanhoId) {
    where.tamanhoId = tamanhoId;
  }

  if (condicaoId) {
    where.condicaoId = condicaoId;
  }

  return prisma.item.findMany({
    where: Object.keys(where).length ? where : undefined,
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
