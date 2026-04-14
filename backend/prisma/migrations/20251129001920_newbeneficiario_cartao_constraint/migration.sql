/*
  Warnings:

  - A unique constraint covering the columns `[beneficiarioId]` on the table `CartaoBeneficiario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CartaoBeneficiario_beneficiarioId_key" ON "CartaoBeneficiario"("beneficiarioId");
