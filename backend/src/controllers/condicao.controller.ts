import { Request, Response } from 'express';
import { createCondicaoService, getAllCondicoesService, deleteCondicaoService, getCondicaoByIdService, updateCondicaoService } from '../services/condicao.service';

export const createCondicaoController = async (req: Request, res: Response) => {
  try {
    const { descricao } = req.body;
    const novaCondicao = await createCondicaoService(descricao);
    return res.status(201).json(novaCondicao);
  } catch (error: any) {
    if (error.message.includes('já está cadastrada')) {
      return res.status(409).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

export const getAllCondicoesController = async (req: Request, res: Response) => {
  try {
    const condicoes = await getAllCondicoesService();
    return res.status(200).json(condicoes);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar as condições.' });
  }
};

export const getCondicaoByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const condicao = await getCondicaoByIdService(Number(id));
    return res.status(200).json(condicao);
  } catch (error: any) {
    if (error.message === 'Condição não encontrada.') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao buscar a condição.' });
  }
};

export const updateCondicaoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descricao } = req.body;
    const condicaoAtualizada = await updateCondicaoService(Number(id), descricao);
    return res.status(200).json(condicaoAtualizada);
  } catch (error: any) {
    if (error.message === 'Condição não encontrada.') {
      return res.status(404).json({ message: error.message });
    }
    if (error.message.includes('já está cadastrada')) {
      return res.status(409).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao atualizar a condição.' });
  }
};

export const deleteCondicaoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteCondicaoService(Number(id));
    return res.status(204).send();
  } catch (error: any) {
    if (error.message === 'Condição não encontrada.') {
      return res.status(404).json({ message: error.message });
    }
    // Tratando o erro de negócio de "condição em uso".
    if (error.message.includes('não pode ser removida')) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao deletar a condição.' });
  }
};