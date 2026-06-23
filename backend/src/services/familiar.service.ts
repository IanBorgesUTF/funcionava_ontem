import { prisma } from '../config/prisma';
import { FamiliarSchemaType } from '../validators/familiar.validator';

export const createFamiliarService = async (data: FamiliarSchemaType) => {
  const beneficiario = await prisma.beneficiario.findUnique({ where: { id: data.beneficiarioId } });
  if (!beneficiario) {
    throw new Error('Beneficiário não encontrado.');
  }

  return prisma.familiar.create({
    data,
  });
};

export const getAllFamiliaresService = async () => {
  return prisma.familiar.findMany({
    include: {
      beneficiario: {
        select: {
          id: true,
          nome: true,
          cpf: true,
        },
      },
    },
  });
};

export const getFamiliarByIdService = async (id: number) => {
  const familiar = await prisma.familiar.findUnique({
    where: { id },
    include: {
      beneficiario: {
        select: {
          id: true,
          nome: true,
        },
      },
    },
  });

  if (!familiar) {
    throw new Error('Familiar não encontrado.');
  }

  return familiar;
};

export const updateFamiliarService = async (id: number, data: FamiliarSchemaType) => {
  const familiarExiste = await prisma.familiar.findUnique({ where: { id } });
  if (!familiarExiste) {
    throw new Error('Familiar não encontrado.');
  }

  const beneficiario = await prisma.beneficiario.findUnique({ where: { id: data.beneficiarioId } });
  if (!beneficiario) {
    throw new Error('Beneficiário não encontrado.');
  }

  return prisma.familiar.update({
    where: { id },
    data,
  });
};

export const deleteFamiliarService = async (id: number) => {
  const familiar = await prisma.familiar.findUnique({ where: { id } });
  if (!familiar) {
    throw new Error('Familiar não encontrado.');
  }

  return prisma.familiar.delete({ where: { id } });
};
