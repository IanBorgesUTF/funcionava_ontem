import { Request, Response } from 'express';
import {
  createFamiliarService,
  getAllFamiliaresService,
  getFamiliarByIdService,
  updateFamiliarService,
  deleteFamiliarService,
} from '../services/familiar.service';

export const createFamiliarController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const novoFamiliar = await createFamiliarService(data);
    return res.status(201).json(novoFamiliar);
  } catch (error: any) {
    if (error.message.includes('Beneficiário não encontrado')) {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

export const getAllFamiliaresController = async (req: Request, res: Response) => {
  try {
    const familiares = await getAllFamiliaresService();
    return res.status(200).json(familiares);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar os familiares.' });
  }
};

export const getFamiliarByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const familiar = await getFamiliarByIdService(Number(id));
    return res.status(200).json(familiar);
  } catch (error: any) {
    if (error.message === 'Familiar não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao buscar o familiar.' });
  }
};

export const updateFamiliarController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const familiarAtualizado = await updateFamiliarService(Number(id), data);
    return res.status(200).json(familiarAtualizado);
  } catch (error: any) {
    if (error.message === 'Familiar não encontrado.' || error.message === 'Beneficiário não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao atualizar o familiar.' });
  }
};

export const deleteFamiliarController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteFamiliarService(Number(id));
    return res.status(204).send();
  } catch (error: any) {
    if (error.message === 'Familiar não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao deletar o familiar.' });
  }
};
