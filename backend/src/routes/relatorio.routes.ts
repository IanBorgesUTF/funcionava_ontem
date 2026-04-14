import { Router } from 'express';
import { checkAuth } from '../middlewares/auth.middleware';
import { getMovimentacoesController } from '../controllers/relatorio.controller';

const router = Router();

router.get('/movimentacoes', checkAuth, getMovimentacoesController);

export default router;
