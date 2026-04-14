-- CreateTable
CREATE TABLE "public"."CartaoBeneficiario" (
    "id" SERIAL NOT NULL,
    "numeroCartao" TEXT NOT NULL,
    "dataValidade" TIMESTAMP(3) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "codigoSeguranca" TEXT NOT NULL,
    "beneficiarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CartaoBeneficiario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CartaoBeneficiario_numeroCartao_key" ON "public"."CartaoBeneficiario"("numeroCartao");

-- AddForeignKey
ALTER TABLE "public"."CartaoBeneficiario" ADD CONSTRAINT "CartaoBeneficiario_beneficiarioId_fkey" FOREIGN KEY ("beneficiarioId") REFERENCES "public"."Beneficiario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
