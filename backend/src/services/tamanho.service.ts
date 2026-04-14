import { prisma } from '../config/prisma';

export const createTamanhoService = async (descricao: string, tipoId: number) => {

  const tipo = await prisma.tipo.findUnique({ where: { id: tipoId } });
  if (!tipo) {
    throw new Error('Tipo não encontrado.');
  }
  // Verifica se a combinação de descrição e tipoId já existe
  const tamanhoExistente = await prisma.tamanho.findUnique({
    where: {
      descricao_tipoId: {
        descricao,
        tipoId,
      }
    },
  });

  if (tamanhoExistente) {
    throw new Error('Este tamanho já está cadastrado para este tipo.');
  }

  return prisma.tamanho.create({
    data: {
      descricao,
      tipoId,
    },
  });
};

// O serviço pode receber um tipoId opcional para filtrar
export const getAllTamanhosService = async (tipoId?: number) => {
  const tipoIdExists = tipoId ? await prisma.tipo.findUnique({ where: { id: tipoId } }) : null;
  if (tipoId && !tipoIdExists) {
    throw new Error('Tipo não encontrado.');
  }

  // Se tipoId for fornecido, filtra os tamanhos por esse tipoId
  return prisma.tamanho.findMany({
    where: {
      tipoId: tipoId ? tipoId : undefined,
    },
  });
};

export const getTamanhoByIdService = async (id: number) => {
  const tamanho = await prisma.tamanho.findUnique({ where: { id } });
  if (!tamanho) {
    throw new Error('Tamanho não encontrado.');
  }
  return tamanho;
};

export const updateTamanhoService = async (id: number, descricao: string, tipoId: number) => {
  await getTamanhoByIdService(id);
  const tipo = await prisma.tipo.findUnique({ where: { id: tipoId } });
  if (!tipo) {
    throw new Error('Tipo não encontrado.');
  }
  const tamanhoExistente = await prisma.tamanho.findUnique({
    where: {
      descricao_tipoId: {
        descricao,
        tipoId,
      }
    },
  });

  if (tamanhoExistente && tamanhoExistente.id !== id) {
    throw new Error('Este tamanho já está cadastrado para este tipo.');
  }

  return prisma.tamanho.update({
    where: { id },
    data: {
      descricao,
      tipoId,
    },
  });
};

export const deleteTamanhoService = async (id: number) => {
  const tamanho = await getTamanhoByIdService(id);

  const itensUsandoTamanho = await prisma.item.count({
    where: { tamanhoId: id },
  });

  if (itensUsandoTamanho > 0) {
    throw new Error('Este tamanho está em uso por um ou mais itens e não pode ser removido.');
  }

  return prisma.tamanho.delete({ where: { id: tamanho.id } });
};