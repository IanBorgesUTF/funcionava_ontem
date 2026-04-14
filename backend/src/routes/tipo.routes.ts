import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { createTipoSchema } from '../validators/tipo.validator';
import {
  createTipoController,
  getAllTiposController,
  getTipoByIdController,
  updateTipoController,
  deleteTipoController,
} from '../controllers/tipo.controller';
import { checkAuth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', checkAuth, getAllTiposController);
router.get('/:id', checkAuth, getTipoByIdController);
router.post('/', checkAuth, validate(createTipoSchema), createTipoController);
router.put('/:id', checkAuth, validate(createTipoSchema), updateTipoController);
router.delete('/:id', checkAuth, deleteTipoController);
export default router;
