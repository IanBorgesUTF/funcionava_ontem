/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Beneficiario` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Beneficiario` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `CartaoBeneficiario` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `CartaoBeneficiario` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Distribuicao` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `Distribuicao` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Distribuicao` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Doacao` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `Doacao` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Doacao` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Voluntario` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Voluntario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tipoId,tamanhoId,condicaoId]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dataAtualizacao` to the `Beneficiario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataAtualizacao` to the `CartaoBeneficiario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataAtualizacao` to the `Distribuicao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataAtualizacao` to the `Doacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `condicaoId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataAtualizacao` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataAtualizacao` to the `Voluntario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Beneficiario" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "dataAtualizacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."CartaoBeneficiario" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "dataAtualizacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "ativo" SET DEFAULT false;

-- AlterTable
ALTER TABLE "public"."Distribuicao" DROP COLUMN "createdAt",
DROP COLUMN "data",
DROP COLUMN "updatedAt",
ADD COLUMN     "dataAtualizacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."Doacao" DROP COLUMN "createdAt",
DROP COLUMN "data",
DROP COLUMN "updatedAt",
ADD COLUMN     "dataAtualizacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."Item" DROP COLUMN "createdAt",
DROP COLUMN "descricao",
DROP COLUMN "updatedAt",
ADD COLUMN     "condicaoId" INTEGER NOT NULL,
ADD COLUMN     "dataAtualizacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "public"."Voluntario" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "admin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dataAtualizacao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "public"."Condicao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Condicao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Condicao_descricao_key" ON "public"."Condicao"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "Item_tipoId_tamanhoId_condicaoId_key" ON "public"."Item"("tipoId", "tamanhoId", "condicaoId");

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_condicaoId_fkey" FOREIGN KEY ("condicaoId") REFERENCES "public"."Condicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
