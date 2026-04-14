import { prisma } from '../config/prisma';

export const createTipoService = async (descricao: string) => {
  // Verifica se o tipo já existe para evitar duplicados
  const tipoExistente = await prisma.tipo.findUnique({ where: { descricao } });
  if (tipoExistente) {
    throw new Error('Este tipo já está cadastrado.');
  }

  return prisma.tipo.create({
    data: { descricao },
  });
};

export const getAllTiposService = async () => {
  return prisma.tipo.findMany();
};

export const getTipoByIdService = async (id: number) => {
  const tipo = await prisma.tipo.findUnique({ where: { id } });

  if (!tipo) {
    throw new Error('Tipo não encontrado.');
  }

  return tipo;
};

export const updateTipoService = async (id: number, descricao: string) => {
  // Verifica se o tipo existe
  const tipoExistente = await prisma.tipo.findUnique({ where: { id } });
  if (!tipoExistente) {
    throw new Error('Tipo não encontrado.');
  }

  // Verifica se a nova descrição já está em uso por outro tipo
  const descricaoExistente = await prisma.tipo.findUnique({ where: { descricao } });
  if (descricaoExistente && descricaoExistente.id !== id) {
    throw new Error('Esta descrição já está em uso por outro tipo.');
  }

  return prisma.tipo.update({
    where: { id },
    data: { descricao },
  });
};

export const deleteTipoService = async (id: number) => {
  await getTipoByIdService(id);

  const tamanhosUsandoTipo = await prisma.tamanho.count({
    where: { tipoId: id },
  });

  if (tamanhosUsandoTipo > 0) {
    throw new Error('Este tipo está em uso por um ou mais tamanhos e não pode ser removido.');
  }

  const itensUsandoTipo = await prisma.item.count({
    where: { tipoId: id },
  });

  if (itensUsandoTipo > 0) {
    throw new Error('Este tipo está em uso por um ou mais itens e não pode ser removido.');
  }

  return prisma.tipo.delete({ where: { id } });
};