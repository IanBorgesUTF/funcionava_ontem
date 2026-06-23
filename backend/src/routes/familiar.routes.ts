import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { familiarSchema } from '../validators/familiar.validator';
import {
  createFamiliarController,
  getAllFamiliaresController,
  getFamiliarByIdController,
  updateFamiliarController,
  deleteFamiliarController,
} from '../controllers/familiar.controller';
import { checkAuth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', checkAuth, getAllFamiliaresController);
router.get('/:id', checkAuth, getFamiliarByIdController);
router.post('/', checkAuth, validate(familiarSchema), createFamiliarController);
router.put('/:id', checkAuth, validate(familiarSchema), updateFamiliarController);
router.delete('/:id', checkAuth, deleteFamiliarController);

export default router;
