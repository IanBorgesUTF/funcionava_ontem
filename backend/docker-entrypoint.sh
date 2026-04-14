#!/bin/sh
echo "Aguardando o PostgreSQL iniciar..."
# O ideal aqui seria usar uma ferramenta como 'wait-for-it.sh',
# mas para simplificar, vamos apenas dar uma pausa.
# Em produção, é bom usar uma solução mais robusta.
sleep 5

echo "Executando as migrações do Prisma..."

npx prisma migrate deploy

echo "Iniciando a aplicação..."

exec "$@"