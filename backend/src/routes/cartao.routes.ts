import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { createCartaoSchema, updateCartaoStatusSchema } from '../validators/cartao.validator';
import {
  createCartaoController,
  getAllCartoesController,
  getCartaoByBeneficiarioIdController,
  updateCartaoStatusController,
  deleteCartaoController,
} from '../controllers/cartao.controller';
import { checkAuth } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', checkAuth, validate(createCartaoSchema), createCartaoController);
router.get('/', checkAuth, getAllCartoesController);
router.get('/beneficiario/:beneficiarioId', checkAuth, getCartaoByBeneficiarioIdController);
router.patch('/:id/status', checkAuth, validate(updateCartaoStatusSchema), updateCartaoStatusController);
router.delete('/:id', checkAuth, deleteCartaoController);

export default router;
