"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
// Cria e exporta uma instância única do PrismaClient
exports.prisma = new client_1.PrismaClient();
