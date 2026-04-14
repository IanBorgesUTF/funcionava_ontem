import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { createTamanhoSchema } from '../validators/tamanho.validator';
import {
  createTamanhoController,
  getAllTamanhosController,
  getTamanhoByIdController,
  updateTamanhoController,
  deleteTamanhoController,
} from '../controllers/tamanho.controller';
import { checkAuth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', checkAuth, getAllTamanhosController);
router.get('/:id', checkAuth, getTamanhoByIdController);
router.post('/', checkAuth, validate(createTamanhoSchema), createTamanhoController);
router.put('/:id', checkAuth, validate(createTamanhoSchema), updateTamanhoController);
router.delete('/:id', checkAuth, deleteTamanhoController);
export default router;
