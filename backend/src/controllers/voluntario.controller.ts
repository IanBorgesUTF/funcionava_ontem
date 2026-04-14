import { Request, Response } from 'express';
import {
    createVoluntarioService,
    getAllVoluntariosService,
    getVoluntarioByIdService,
    updateVoluntarioService,
    deleteVoluntarioService
} from '../services/voluntario.service';

export const createVoluntarioController = async (req: Request, res: Response) => {
    try {
        const novoVoluntario = await createVoluntarioService(req.body);
        return res.status(201).json(novoVoluntario);
    } catch (error: any) {
        if (error.message === 'Email já cadastrado.') return res.status(409).json({ message: error.message });
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

export const getAllVoluntariosController = async (req: Request, res: Response) => {
    try {
        const voluntarios = await getAllVoluntariosService();
        return res.status(200).json(voluntarios);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar voluntários.' });
    }
};

export const getVoluntarioByIdController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const voluntario = await getVoluntarioByIdService(id);
        return res.status(200).json(voluntario);
    } catch (error: any) {
        if (error.message === 'Voluntário não encontrado.') return res.status(404).json({ message: error.message });
        return res.status(500).json({ message: 'Erro interno.' });
    }
};

export const updateVoluntarioController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const atualizado = await updateVoluntarioService(id, req.body);
        return res.status(200).json(atualizado);
    } catch (error: any) {
        if (error.message === 'Voluntário não encontrado.') return res.status(404).json({ message: error.message });
        return res.status(500).json({ message: 'Erro interno.' });
    }
};

export const deleteVoluntarioController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        await deleteVoluntarioService(id);
        return res.status(204).send();
    } catch (error: any) {
        if (error.message === 'Voluntário não encontrado.') return res.status(404).json({ message: error.message });
        return res.status(500).json({ message: 'Erro interno.' });
    }
};