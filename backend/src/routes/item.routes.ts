import { Router } from 'express';
import { checkAuth } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validation.middleware';
import {
  getAllItensController,
  getItemByIdController,
  updateItemQuantidadeController,
} from '../controllers/item.controller';
import { updateItemQuantidadeSchema } from '../validators/item.validator';

const router = Router();

router.get('/', checkAuth, getAllItensController);
router.get('/:id', checkAuth, getItemByIdController);
router.patch('/:id/quantidade', checkAuth, validate(updateItemQuantidadeSchema), updateItemQuantidadeController);

export default router;
