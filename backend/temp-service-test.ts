import { prisma } from './src/config/prisma';
import { createDistribuicaoService } from './src/services/distribuicao.service';

(async () => {
  try {
    const beneficiario = await prisma.beneficiario.findFirst({ select: { id: true } });
    if (!beneficiario) {
      console.error('Nenhum beneficiário encontrado no banco.');
      process.exit(1);
    }
    console.log('Beneficiário testado:', beneficiario.id);

    const card = await prisma.cartaoBeneficiario.findFirst({ where: { beneficiarioId: beneficiario.id }, select: { numeroCartao: true, ativo: true } });
    if (!card) {
      console.error('Nenhum cartão encontrado para o beneficiário.');
      process.exit(1);
    }
    console.log('Cartão válido real:', card.numeroCartao, 'ativo=', card.ativo);

    const invalidNumber = card.numeroCartao.slice(0, -1) + ((Number(card.numeroCartao.slice(-1)) + 1) % 10);
    console.log('Teste com número inválido:', invalidNumber);

    const data = {
      beneficiarioId: beneficiario.id,
      cartaoNumero: invalidNumber,
      itens: [
        { tipoId: 1, tamanhoId: 1, condicaoId: 1, quantidade: 1 }
      ],
    };

    await createDistribuicaoService(data as any, 1);
    console.log('Nenhum erro lançado - inesperado');
  } catch (error: any) {
    console.log('CATCH RAW ERROR:', error);
    console.log('error.message:', error?.message);
  } finally {
    await prisma.$disconnect();
  }
})();
