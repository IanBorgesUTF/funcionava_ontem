import { prisma } from '../config/prisma';

export const getMovimentacoesService = async (inicio?: Date, fim?: Date) => {
  const dataFilter = (field: 'createdAt') => {
    if (inicio && fim) return { [field]: { gte: inicio, lte: fim } };
    if (inicio) return { [field]: { gte: inicio } };
    if (fim) return { [field]: { lte: fim } };
    return {};
  };

  const [doacoes, distribuicoes] = await Promise.all([
    prisma.doacao.findMany({
      where: dataFilter('createdAt'),
      orderBy: { createdAt: 'desc' },
      include: {
        voluntario: { select: { id: true, nome: true, email: true } },
        itens: {
          select: {
            quantidade: true,
            item: {
              select: {
                id: true,
                tipo: { select: { descricao: true } },
                tamanho: { select: { descricao: true } },
                condicao: { select: { descricao: true } },
              },
            },
          },
        },
      },
    }),
    prisma.distribuicao.findMany({
      where: dataFilter('createdAt'),
      orderBy: { createdAt: 'desc' },
      include: {
        voluntario: { select: { id: true, nome: true, email: true } },
        beneficiario: { select: { id: true, nome: true, cpf: true } },
        itens: {
          select: {
            quantidade: true,
            item: {
              select: {
                id: true,
                tipo: { select: { descricao: true } },
                tamanho: { select: { descricao: true } },
                condicao: { select: { descricao: true } },
              },
            },
          },
        },
      },
    }),
  ]);

  const totalEntradas = doacoes.reduce((acc, d) => acc + d.itens.reduce((s, i) => s + i.quantidade, 0), 0);
  const totalSaidas = distribuicoes.reduce((acc, dist) => acc + dist.itens.reduce((s, i) => s + i.quantidade, 0), 0);

  return {
    periodo: {
      inicio: inicio ? inicio.toISOString() : null,
      fim: fim ? fim.toISOString() : null,
    },
    resumo: {
      totalEntradas,
      totalSaidas,
    },
    doacoes,
    distribuicoes,
  };
};
