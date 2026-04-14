import { Request, Response } from 'express';
import { createDoacaoService, deleteDoacaoService, getAllDoacoesService, getDoacaoByIdService } from '../services/doacao.service';
import { ZodError } from 'zod';

export const createDoacaoController = async (req: Request, res: Response) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ message: 'Usuário não autenticado.' });
    }
    const doacao = await createDoacaoService({
      ...req.body,
      voluntarioId: req.user.id,
    });
    return res.status(201).json(doacao);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ message: 'Dados inválidos.', issues: error.issues });
    }
    if (error instanceof Error && error.message === 'Voluntário não encontrado.') {
      return res.status(404).json({ message: error.message });
    }
    if (error instanceof Error && error.message === 'Referência inválida para tipo, tamanho ou condição.') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(400).json({ message: 'Não foi possível registrar a doação. Verifique os dados enviados.' });
  }
};

export const getAllDoacoesController = async (req: Request, res: Response) => {
  try {
    const doacoes = await getAllDoacoesService();
    return res.status(200).json(doacoes);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar doações.' });
  }
};

export const getDoacaoByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido.' });
    }
    const doacao = await getDoacaoByIdService(id);
    return res.status(200).json(doacao);
  } catch (error: any) {
    if (error.message === 'Doação não encontrada.') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Erro interno.' });
  }
};

export const deleteDoacaoController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido.' });
    }
    await deleteDoacaoService(id);
    return res.status(204).send();
  } catch (error: any) {
    if (error.message === 'Doação não encontrada.') {
      return res.status(404).json({ message: error.message });
    }
    // Pode ocorrer erro se tentar decrementar estoque abaixo de zero (P2025)
    return res.status(500).json({ message: 'Erro ao cancelar doação.' });
  }
};
