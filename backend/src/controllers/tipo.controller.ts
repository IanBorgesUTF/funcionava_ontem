import { Request, Response } from 'express';
import { createTipoService, getAllTiposService,getTipoByIdService,updateTipoService,deleteTipoService } from '../services/tipo.service';

export const createTipoController = async (req: Request, res: Response) => {
  try {
    const { descricao } = req.body;
    const novoTipo = await createTipoService(descricao);
    return res.status(201).json(novoTipo);
  } catch (error: any) {
    if (error.message.includes('já está cadastrado')) {
      return res.status(409).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

export const getAllTiposController = async (req: Request, res: Response) => {
  try {
    const tipos = await getAllTiposService();
    return res.status(200).json(tipos);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar os tipos.' });
  }
};

export const getTipoByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const tipo = await getTipoByIdService(id);
    return res.status(200).json(tipo);
  } catch (error: any) {
    if (error.message === 'Tipo não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

export const updateTipoController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { descricao } = req.body;
    const tipoAtualizado = await updateTipoService(id, descricao);
    return res.status(200).json(tipoAtualizado);
  } catch (error: any) {
    if (error.message === 'Tipo não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    if (error.message.includes('já está em uso por outro tipo')) {
      return res.status(409).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

export const deleteTipoController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await deleteTipoService(id);
    return res.status(204).send();
  } catch (error: any) {
    if (error.message === 'Tipo não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    if (error.message.includes('não pode ser removido')) {
      return res.status(409).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};