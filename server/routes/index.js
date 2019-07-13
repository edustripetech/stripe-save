import { Router } from 'express';
import authRoutes from './AuthRoutes';

const router = Router();

router.get('/', (req, res) => res.status(200).json({ mesaage: 'Edustripe-Save API' }));

router.use('/auth', authRoutes);

export default router;
