import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { createDoacaoSchema } from '../validators/doacao.validator';
import { createDoacaoController, deleteDoacaoController, getAllDoacoesController, getDoacaoByIdController } from '../controllers/doacao.controller';
import { checkAuth, isAdmin } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', checkAuth, getAllDoacoesController);

router.post(
  '/',
  checkAuth,
  validate(createDoacaoSchema),
  createDoacaoController
);

router.get('/:id', checkAuth, getDoacaoByIdController);

router.delete('/:id', checkAuth, isAdmin, deleteDoacaoController);

export default router;
