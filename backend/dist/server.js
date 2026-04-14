"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const startServer_1 = __importDefault(require("./scripts/startServer"));
const app = (0, express_1.default)();
/**
 * @route GET /
 * @description Rota principal da aplicação.
 * @access Público
 */
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
/**
 * Inicia o servidor e fica à escuta na porta definida.
 */
(0, startServer_1.default)(app);
