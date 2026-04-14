import { Express } from 'express'; // Importamos o tipo 'Express'
import { prisma } from '../config/prisma';
import env from "../config/env";


/**
 * Função que recebe uma instância do Express, testa a conexão com o banco
 * e, se bem-sucedida, inicia o servidor.
 * @param app Instância da aplicação Express
 */
const startServer = async (app: Express) => {
  try {
    await prisma.$connect();
    console.log('✅ Conexão com o banco de dados bem-sucedida!');

    app.listen(env.PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${env.PORT}`);
    });
  } catch (error) {
    console.error('❌ Falha ao conectar ao banco de dados.');
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};
export default startServer;