import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import { loginSchema } from '../validators/auth.validator';
import { loginController } from '../controllers/auth.controller';

const router = Router();

router.post('/login', validate(loginSchema), loginController);

export default router;
