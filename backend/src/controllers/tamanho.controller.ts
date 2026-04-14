import { Request, Response } from 'express';
import { createTamanhoService, getAllTamanhosService, getTamanhoByIdService, updateTamanhoService, deleteTamanhoService } from '../services/tamanho.service';

export const createTamanhoController = async (req: Request, res: Response) => {
  try {
    const { descricao, tipoId } = req.body;
    const novoTamanho = await createTamanhoService(descricao, tipoId);
    return res.status(201).json(novoTamanho);
  } catch (error: any) {
    if (error.message.includes('já está cadastrado')) {
      return res.status(409).json({ message: error.message });
    }
    if (error.message === 'Tipo não encontrado.') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

export const getAllTamanhosController = async (req: Request, res: Response) => {
  try {
    const tipoIdQuery = req.query.tipoId;
    const tipoId = tipoIdQuery ? parseInt(tipoIdQuery as string) : undefined;

    const tamanhos = await getAllTamanhosService(tipoId);
    return res.status(200).json(tamanhos);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar os tamanhos.' });
  }
};

export const getTamanhoByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const tamanho = await getTamanhoByIdService(id);
    return res.status(200).json(tamanho);
  } catch (error: any) {
    if (error.message === 'Tamanho não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao buscar o tamanho.' });
  }
};

export const updateTamanhoController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { descricao, tipoId } = req.body;
    const tamanhoAtualizado = await updateTamanhoService(id, descricao, tipoId);
    return res.status(200).json(tamanhoAtualizado);
  } catch (error: any) {
    if (error.message === 'Tamanho não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    if (error.message.includes('já está cadastrado')) {
      return res.status(409).json({ message: error.message });
    }
    if (error.message === 'Tipo não encontrado.') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao atualizar o tamanho.' });
  }
};

export const deleteTamanhoController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await deleteTamanhoService(id);
    return res.status(204).send();
  } catch (error: any) {
    if (error.message === 'Tamanho não encontrado.') {
      return res.status(404).json({ message: error.message });
    }

    if (error.message.includes('não pode ser removido')) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Erro ao deletar o tamanho.' });
  }
};