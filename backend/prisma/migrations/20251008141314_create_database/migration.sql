-- CreateTable
CREATE TABLE "public"."Voluntario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "endereco" TEXT,
    "telefone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Voluntario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Beneficiario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT,
    "endereco" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Beneficiario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Doacao" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "voluntarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemDoacao" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "doacaoId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "ItemDoacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Distribuicao" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "voluntarioId" INTEGER NOT NULL,
    "beneficiarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Distribuicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemDistribuicao" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "distribuicaoId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "ItemDistribuicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Item" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "tipoId" INTEGER NOT NULL,
    "tamanhoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tipo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Tipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tamanho" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipoId" INTEGER NOT NULL,

    CONSTRAINT "Tamanho_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voluntario_email_key" ON "public"."Voluntario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Beneficiario_cpf_key" ON "public"."Beneficiario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_descricao_key" ON "public"."Tipo"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "Tamanho_descricao_tipoId_key" ON "public"."Tamanho"("descricao", "tipoId");

-- AddForeignKey
ALTER TABLE "public"."Doacao" ADD CONSTRAINT "Doacao_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "public"."Voluntario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemDoacao" ADD CONSTRAINT "ItemDoacao_doacaoId_fkey" FOREIGN KEY ("doacaoId") REFERENCES "public"."Doacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemDoacao" ADD CONSTRAINT "ItemDoacao_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Distribuicao" ADD CONSTRAINT "Distribuicao_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "public"."Voluntario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Distribuicao" ADD CONSTRAINT "Distribuicao_beneficiarioId_fkey" FOREIGN KEY ("beneficiarioId") REFERENCES "public"."Beneficiario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemDistribuicao" ADD CONSTRAINT "ItemDistribuicao_distribuicaoId_fkey" FOREIGN KEY ("distribuicaoId") REFERENCES "public"."Distribuicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemDistribuicao" ADD CONSTRAINT "ItemDistribuicao_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "public"."Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_tamanhoId_fkey" FOREIGN KEY ("tamanhoId") REFERENCES "public"."Tamanho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tamanho" ADD CONSTRAINT "Tamanho_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "public"."Tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
