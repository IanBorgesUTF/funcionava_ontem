import { prisma } from '../config/prisma';

export const getDashboardMetrics = async () => {
  const [voluntarios, beneficiarios, doacoes, distribuicoes, totalItens] = await Promise.all([
    prisma.voluntario.count(),
    prisma.beneficiario.count(),
    prisma.doacao.count(),
    prisma.distribuicao.count(),
    prisma.item.aggregate({ _sum: { quantidadeEstoque: true } }),
  ]);

  // Top 5 itens com menor estoque
  const itensBaixoEstoque = await prisma.item.findMany({
    orderBy: { quantidadeEstoque: 'asc' },
    take: 5,
    select: {
      id: true,
      quantidadeEstoque: true,
      tipo: { select: { descricao: true } },
      tamanho: { select: { descricao: true } },
      condicao: { select: { descricao: true } },
    },
  });

  return {
    voluntarios,
    beneficiarios,
    doacoes,
    distribuicoes,
    estoqueTotal: totalItens._sum.quantidadeEstoque ?? 0,
    itensBaixoEstoque,
  };
};
