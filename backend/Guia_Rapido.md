# Guia Rápido do Projeto (Cheat Sheet)

Este guia contém os passos e comandos essenciais para configurar, executar e gerir este projeto utilizando Docker.

## Stack Tecnológica

  * **Backend:** Node.js com Express e TypeScript
  * **Banco de Dados:** PostgreSQL
  * **ORM:** Prisma
  * **Ambiente:** Docker e Docker Compose

## Pré-requisitos

Antes de começar, garanta que você tem os seguintes softwares instalados na sua máquina:

  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
  * [Docker](https://www.docker.com/products/docker-desktop/)
  * [Docker Compose](https://docs.docker.com/compose/install/) (geralmente já vem com o Docker Desktop)

-----

## 🚀 Configuração Inicial (Do Zero)

Estes são os passos para configurar o ambiente pela primeira vez após clonar o repositório.

1.  **Clonar o Repositório**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DA_PASTA_DO_PROJETO>
    ```

2.  **Configurar as Variáveis de Ambiente**
    O projeto usa um ficheiro `.env` para as configurações. Copie o ficheiro de exemplo para criar o seu.

    ```bash
    cp .env.example .env
    ```

    > **Nota:** Abra o ficheiro `.env` e verifique se as variáveis (como senhas e portas) estão de acordo com a sua preferência.

3.  **Instalar as Dependências Locais**
    Isto instala `devDependencies` como `typescript` e `nodemon`, o que é útil para a integração com o seu editor de código (VS Code, etc.).

    ```bash
    npm install
    ```

4.  **Construir as Imagens e Iniciar os Containers**
    Este é o comando principal que irá construir as imagens Docker e iniciar os serviços da aplicação e do banco de dados em segundo plano.

    ```bash
    docker compose up -d --build
    ```

5.  **Executar as Migrações do Banco de Dados**
    Com os containers em execução, execute a migração inicial para criar as tabelas no banco de dados.

    ```bash
    docker compose exec app npx prisma migrate dev
    ```

Pronto\! O seu ambiente de desenvolvimento está 100% operacional. A aplicação está acessível em `http://localhost:3000`.

### Documentação da API

- UI interativa: `http://localhost:3000/apidocs`
- YAML cru: `http://localhost:3000/apidocs.yaml`

-----

## 日常 Fluxo de Desenvolvimento do Dia a Dia

Depois da configuração inicial, o seu dia a dia será muito mais simples.

  * **Para iniciar o ambiente de trabalho:** `docker compose up -d`

  * **Para parar o ambiente de trabalho:** `docker compose down`

Graças à configuração com `nodemon` e `volumes`, qualquer alteração que você salvar nos seus ficheiros `.ts` será refletida automaticamente, e o servidor reiniciará dentro do container. **Não é preciso reconstruir a imagem a cada alteração.**

-----

## 🧰 Comandos Essenciais do Docker Compose

Aqui está uma lista de referência dos comandos mais úteis.

### Iniciar e Parar o Ambiente

  * **`docker compose up -d`**

      * Inicia todos os serviços em segundo plano (`-d`). Constrói as imagens se elas não existirem.

  * **`docker compose down`**

      * Para e remove os containers. Por padrão, os dados do banco (no volume) são preservados.

  * **`docker compose down -v`**

      * Para, remove os containers E os volumes de dados. Use este comando para começar com um banco de dados 100% limpo.

  * **`docker compose restart`**

      * Reinicia todos os serviços sem os remover.

### Gerir Imagens e Containers

  * **`docker compose build`**

      * Força a reconstrução das imagens. Essencial após fazer alterações no seu `Dockerfile`.

  * **`docker compose ps`**

      * Lista os containers do projeto e mostra o seu status (`Up`, `Exited`, etc.).

  * **`docker compose logs app`**

      * Mostra os logs do serviço `app`. Muito útil para depuração.
      * Use `docker-compose logs -f app` para ver os logs em tempo real.

  * **`docker compose exec app <comando>`**

      * Executa um `<comando>` dentro do container `app` que já está em execução.

-----

## 🐘 Trabalhando com o Banco de Dados (Prisma)

Todos os comandos do Prisma devem ser executados dentro do container `app` usando `docker-compose exec`.

  * **Criar uma nova migração:**

      * Após alterar o `prisma/schema.prisma`, crie uma nova migração com:

    <!-- end list -->

    ```bash
    docker compose exec app npx prisma migrate dev --name <nome_descritivo_da_migracao>
    ```

  * **Visualizar o Banco de Dados:**

      * Inicie o Prisma Studio para ter uma interface gráfica do seu banco.

    <!-- end list -->

    ```bash
    docker compose exec app npx prisma studio
    ```

      * Depois aceda a `http://localhost:5555` no seu navegador.

  * **Verificar o Status das Migrações:**

    ```bash
    docker compose exec app npx prisma migrate status
    ```

  * **Rodar o seed de dados (usa `prisma/seed.ts`):**

    ```bash
    docker compose exec app npx tsx prisma/seed.ts
    ```

    > Garanta que `SEED_ADMIN_EMAIL` e `SEED_ADMIN_PASSWORD` estão definidos no `.env` antes de rodar.

  * **Rodar migrações manualmente (se o entrypoint não cobrir):**

    ```bash
    docker compose exec app npx prisma migrate deploy
    ```

  * **Recriar containers após alterar Dockerfile ou dependências:**

    ```bash
    docker compose up --build --force-recreate
    ```
