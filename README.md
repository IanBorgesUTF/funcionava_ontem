# Sistema de gerenciamento de doações SANEM

Um aplicativo para gerenciar doações de forma simples e eficiente, conectando doadores e beneficiários.

## Funcionalidades

- Cadastro de doadores
- - Registro de doações
- Relatórios e estatísticas
  
## Tecnologias Utilizadas

- Frontend: React,Vite,CSS Modules, Axios, Fetch
- Backend: Node.js,Express,Typescript,Prisma ORM
- Banco de Dados: PostgreSQL
- Autenticação: JWT
- Integração/API: Swagger UI
- Outras: Docker

## Estrutura do Projeto

├── frontend/
│ ├── public/
│ ├── src/
├── backend/
│ ├── dist/
│ ├── docs/
│ └── prisma/
│ └── src/

Backend

  Instale as dependências:

    npm install

  Configure .env com DATABASE_URL, JWT_SECRET, credenciais de seed (SEED_ADMIN_EMAIL, SEED_ADMIN_PASSWORD) e outras variáveis necessárias.
    Suba com Docker:

    docker compose up --build

  (Opcional) Rodar migrações manualmente:

    docker compose exec app npx prisma migrate deploy

  (Opcional) Rodar seed:

    docker compose exec app npx tsx prisma/seed.ts

Frontend

  Vá para frontend/:

    cd frontend

  Instale dependências:

    npm install

  Crie/ajuste .env do frontend se necessário (ex.: VITE_API_URL).
    Rode localmente:

    npm run dev

## Colaboradores:

Bruno Rocco Wolfartd
Felipe Sousa da Costa
Ian Fernandes Borges
