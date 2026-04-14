"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../config/prisma");
const env_1 = __importDefault(require("../config/env"));
/**
 * Função que recebe uma instância do Express, testa a conexão com o banco
 * e, se bem-sucedida, inicia o servidor.
 * @param app Instância da aplicação Express
 */
const startServer = async (app) => {
    try {
        await prisma_1.prisma.$connect();
        console.log('✅ Conexão com o banco de dados bem-sucedida!');
        app.listen(env_1.default.PORT, () => {
            console.log(`🚀 Servidor rodando na porta ${env_1.default.PORT}`);
        });
    }
    catch (error) {
        console.error('❌ Falha ao conectar ao banco de dados.');
        console.error(error);
        await prisma_1.prisma.$disconnect();
        process.exit(1);
    }
};
exports.default = startServer;
