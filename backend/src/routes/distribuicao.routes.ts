import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { createDistribuicaoSchema } from '../validators/distribuicao.validator';
import {
  createDistribuicaoController,
  getAllDistribuicoesController,
  getDistribuicaoByIdController,
} from '../controllers/distribuicao.controller';
import { checkAuth } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', checkAuth, validate(createDistribuicaoSchema), createDistribuicaoController);
router.get('/', checkAuth, getAllDistribuicoesController);
router.get('/:id', checkAuth, getDistribuicaoByIdController);

export default router;
