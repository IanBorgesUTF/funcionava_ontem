import { Router } from 'express';
import { checkAuth } from '../middlewares/auth.middleware';
import { getDashboardController } from '../controllers/dashboard.controller';

const router = Router();

router.get('/', checkAuth, getDashboardController);

export default router;
