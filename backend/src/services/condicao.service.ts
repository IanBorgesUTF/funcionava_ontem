import { prisma } from '../config/prisma';

export const createCondicaoService = async (descricao: string) => {
  // Verifica se a condição já existe para evitar duplicados
  const condicaoExistente = await prisma.condicao.findUnique({ where: { descricao } });
  if (condicaoExistente) {
    throw new Error('Esta condição já está cadastrada.');
  }

  return prisma.condicao.create({
    data: { descricao },
  });
};

export const getAllCondicoesService = async () => {
  return prisma.condicao.findMany();
};

export const getCondicaoByIdService = async (id: number) => {
  const condicao = await prisma.condicao.findUnique({ where: { id } });
  if (!condicao) {
    throw new Error('Condição não encontrada.');
  }
  return condicao;
};

export const updateCondicaoService = async (id: number, descricao: string) => {
  const condicao = await prisma.condicao.findUnique({ where: { id } });
  if (!condicao) {
    throw new Error('Condição não encontrada.');
  }

  // Verifica se a nova descrição já está em uso por outra condição
  const condicaoExistente = await prisma.condicao.findUnique({ where: { descricao } });
  if (condicaoExistente && condicaoExistente.id !== id) {
    throw new Error('Esta condição já está cadastrada.');
  }

  return prisma.condicao.update({
    where: { id },
    data: { descricao },
  });
};

export const deleteCondicaoService = async (id: number) => {
  const condicao = await prisma.condicao.findUnique({ where: { id } });
  if (!condicao) {
    throw new Error('Condição não encontrada.');
  }

  const itensUsandoCondicao = await prisma.item.count({
    where: { condicaoId: id },
  });

  // Impede a exclusão se houver itens associados a esta condição.
  if (itensUsandoCondicao > 0) {
    throw new Error('Esta condição está em uso por um ou mais itens e não pode ser removida.');
  }

  return prisma.condicao.delete({ where: { id } });
};