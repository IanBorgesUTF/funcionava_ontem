import { Request, Response } from 'express';
import {
    createCartaoService,
    getAllCartoesService,
    getCartaoByBeneficiarioIdService,
    updateCartaoStatusService,
    deleteCartaoService
} from '../services/cartao.service';

export const createCartaoController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const novoCartao = await createCartaoService(data);
        return res.status(201).json(novoCartao);
    } catch (error: any) {
        if (error.message.includes('Beneficiário não encontrado')) {
        return res.status(404).json({ message: error.message });
        }
        if (error.message.includes('já possui um cartão') || error.message.includes('já está em uso')) {
        return res.status(409).json({ message: error.message }); // 409 Conflict
        }
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

export const getAllCartoesController = async (req: Request, res: Response) => {
    try {
        const cartoes = await getAllCartoesService();
        return res.status(200).json(cartoes);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar os cartões.' });
    }
};

export const getCartaoByBeneficiarioIdController = async (req: Request, res: Response) => {
    try {
        const { beneficiarioId } = req.params;
        const cartao = await getCartaoByBeneficiarioIdService(Number(beneficiarioId));
        return res.status(200).json(cartao);
    } catch (error: any) {
        if (error.message.includes('Nenhum cartão encontrado')) {
        return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao buscar o cartão.' });
    }
};

export const updateCartaoStatusController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { ativo } = req.body;
        const cartaoAtualizado = await updateCartaoStatusService(Number(id), ativo);
        return res.status(200).json(cartaoAtualizado);
    } catch (error: any) {
        if (error.message.includes('Cartão não encontrado')) {
        return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao atualizar o status do cartão.' });
    }
};

export const deleteCartaoController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteCartaoService(Number(id));
        return res.status(204).send();
    } catch (error: any) {
        if (error.message.includes('Cartão não encontrado')) {
        return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao deletar o cartão.' });
    }
};