import { Request, Response } from 'express';
import {
    createDistribuicaoService,
    getAllDistribuicoesService,
    getDistribuicaoByIdService
} from '../services/distribuicao.service';

export const createDistribuicaoController = async (req: Request, res: Response) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: 'Usuário não autenticado.' });
        }
        const data = req.body;
        const novaDistribuicao = await createDistribuicaoService(data, req.user.id);
        return res.status(201).json(novaDistribuicao);
    } catch (error: any) {
        // Erros de negócio (falta de estoque, item não encontrado)
        const msg = error.message || '';
        const lower = msg.toLowerCase();
        if (
            msg.includes('Estoque insuficiente') ||
            lower.includes('não encontrado') ||
            lower.includes('nao encontrado') ||
            msg.includes('Não encontramos esse item') ||
            msg.includes('Limite de itens excedido')
        ) {
            return res.status(400).json({ message: error.message }); // 400 Bad Request
        }
        // Erro genérico
        return res.status(500).json({ message: 'Erro interno do servidor ao criar a distribuição.' });
    }
};

export const getAllDistribuicoesController = async (req: Request, res: Response) => {
    try {
        const distribuicoes = await getAllDistribuicoesService();
        return res.status(200).json(distribuicoes);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar as distribuições.' });
    }
};

export const getDistribuicaoByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const parsedId = Number(id);
        if (Number.isNaN(parsedId)) {
            return res.status(400).json({ message: 'ID inválido.' });
        }
        const distribuicao = await getDistribuicaoByIdService(parsedId);
        return res.status(200).json(distribuicao);
    } catch (error: any) {
        if (error.message.includes('não encontrada')) {
        return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao buscar a distribuição.' });
    }
};
