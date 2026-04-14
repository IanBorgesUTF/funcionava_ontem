import { Request, Response } from 'express';
import { getDashboardMetrics } from '../services/dashboard.service';

export const getDashboardController = async (_req: Request, res: Response) => {
  try {
    const data = await getDashboardMetrics();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao carregar métricas do dashboard.' });
  }
};
