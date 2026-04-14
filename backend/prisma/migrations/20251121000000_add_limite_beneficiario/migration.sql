-- Adiciona o limite de itens por beneficiário (0 = sem limite)
ALTER TABLE "Beneficiario"
ADD COLUMN IF NOT EXISTS "limiteItens" INTEGER NOT NULL DEFAULT 0;

-- Comentário explicativo (dependente do suporte do banco)
COMMENT ON COLUMN "Beneficiario"."limiteItens" IS 'Limite máximo de itens que o beneficiário pode receber em distribuições (0 = sem limite)';

-- Ajusta comentário de codigoSeguranca para destacar uso como senha
COMMENT ON COLUMN "CartaoBeneficiario"."codigoSeguranca" IS 'Usado como senha de acesso do beneficiário no app';
