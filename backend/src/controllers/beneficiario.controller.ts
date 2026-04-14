import { Request, Response } from 'express';
import {
    createBeneficiarioService,
    getAllBeneficiariosService,
    getBeneficiarioByIdService,
    updateBeneficiarioService,
    deleteBeneficiarioService,
} from '../services/beneficiario.service';

export const createBeneficiarioController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const novoBeneficiario = await createBeneficiarioService(data);
        return res.status(201).json(novoBeneficiario);
    } catch (error: any) {
        if (error.message.includes('já está cadastrado')) {
        return res.status(409).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

export const getAllBeneficiariosController = async (req: Request, res: Response) => {
    try {
        const beneficiarios = await getAllBeneficiariosService();
        return res.status(200).json(beneficiarios);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar os beneficiários.' });
    }
};

export const getBeneficiarioByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const beneficiario = await getBeneficiarioByIdService(Number(id));
        return res.status(200).json(beneficiario);
    } catch (error: any) {
        if (error.message === 'Beneficiário não encontrado.') {
        return res.status(404).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao buscar o beneficiário.' });
    }
};

export const updateBeneficiarioController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const beneficiarioAtualizado = await updateBeneficiarioService(Number(id), data);
        return res.status(200).json(beneficiarioAtualizado);
    } catch (error: any) {
        if (error.message === 'Beneficiário não encontrado.') {
        return res.status(404).json({ message: error.message });
        }
        if (error.message.includes('já está cadastrado')) {
        return res.status(409).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao atualizar o beneficiário.' });
    }
};

export const deleteBeneficiarioController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteBeneficiarioService(Number(id));
        return res.status(204).send();
    } catch (error: any) {
        if (error.message === 'Beneficiário não encontrado.') {
        return res.status(404).json({ message: error.message });
        }
        // Tratando o erro de negócio
        if (error.message.includes('não pode ser removido')) {
        return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: 'Erro ao deletar o beneficiário.' });
    }
};