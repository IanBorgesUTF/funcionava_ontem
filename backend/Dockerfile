# ---- BUILD ----
FROM node:lts-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Copia o schema do Prisma antes de copiar o resto do código
COPY prisma ./prisma

# Gera o Prisma Client
RUN npx prisma generate

# Copia o resto do código
COPY . .
RUN npm run build

# ---- PRODUÇÃO ----
FROM node:lts-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --omit=dev

# Copia o schema e o cliente Prisma gerado no estágio de build
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/node_modules/prisma ./node_modules/prisma
COPY --from=builder /usr/src/app/docs ./docs

# Copia a aplicação já compilada
COPY --from=builder /usr/src/app/dist ./dist

COPY --from=builder /usr/src/app/docker-entrypoint.sh .
RUN chmod +x /usr/src/app/docker-entrypoint.sh

EXPOSE 3000

CMD [ "node", "dist/index.js" ]
