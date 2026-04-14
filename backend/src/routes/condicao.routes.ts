import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { createCondicaoSchema } from '../validators/condicao.validator';
import {
  createCondicaoController,
  getAllCondicoesController,
  deleteCondicaoController,
  getCondicaoByIdController,
  updateCondicaoController,
} from '../controllers/condicao.controller';
import { checkAuth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', checkAuth, getAllCondicoesController);
router.get('/:id', checkAuth, getCondicaoByIdController);
router.post('/', checkAuth, validate(createCondicaoSchema), createCondicaoController);
router.put('/:id', checkAuth, validate(createCondicaoSchema), updateCondicaoController);
router.delete('/:id', checkAuth, deleteCondicaoController);
export default router;
