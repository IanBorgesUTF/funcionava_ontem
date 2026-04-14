import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { createVoluntarioSchema, updateVoluntarioSchema } from '../validators/voluntario.validator';
import { checkAuth, isAdmin } from '../middlewares/auth.middleware';
import {
    createVoluntarioController,
    getAllVoluntariosController,
    getVoluntarioByIdController,
    updateVoluntarioController,
    deleteVoluntarioController
} from '../controllers/voluntario.controller';

const router = Router();

router.get('/', checkAuth, getAllVoluntariosController);
router.get('/:id', checkAuth, getVoluntarioByIdController);

router.post(
    '/',
    checkAuth,
    isAdmin,
    validate(createVoluntarioSchema),
    createVoluntarioController
);

router.put(
    '/:id',
    checkAuth,
    isAdmin,
    validate(updateVoluntarioSchema),
    updateVoluntarioController
);

router.delete(
    '/:id',
    checkAuth,
    isAdmin,
    deleteVoluntarioController
);

export default router;