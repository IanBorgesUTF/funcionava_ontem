import { Request, Response } from 'express';
import {
  getAllItensService,
  getItemByIdService,
  updateItemQuantidadeService,
} from '../services/item.service';

export const getAllItensController = async (_req: Request, res: Response) => {
  try {
    const itens = await getAllItensService();
    return res.status(200).json(itens);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar itens.' });
  }
};

export const getItemByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = await getItemByIdService(id);
    return res.status(200).json(item);
  } catch (error: any) {
    if (error.message === 'Item não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao buscar item.' });
  }
};

export const updateItemQuantidadeController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { quantidade } = req.body;
    const item = await updateItemQuantidadeService(id, quantidade);
    return res.status(200).json(item);
  } catch (error: any) {
    if (error.message === 'Item não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro ao atualizar a quantidade do item.' });
  }
};
