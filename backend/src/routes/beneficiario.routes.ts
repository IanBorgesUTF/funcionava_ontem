import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { beneficiarioSchema } from '../validators/beneficiario.validator';
import {
    createBeneficiarioController,
    getAllBeneficiariosController,
    getBeneficiarioByIdController,
    updateBeneficiarioController,
    deleteBeneficiarioController
} from '../controllers/beneficiario.controller';
import { checkAuth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', checkAuth, getAllBeneficiariosController);
router.get('/:id', checkAuth, getBeneficiarioByIdController);
router.post('/', checkAuth, validate(beneficiarioSchema), createBeneficiarioController);
router.put('/:id', checkAuth, validate(beneficiarioSchema), updateBeneficiarioController);
router.delete('/:id', checkAuth, deleteBeneficiarioController);
export default router;
