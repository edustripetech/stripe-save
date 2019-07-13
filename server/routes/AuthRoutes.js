import { Router } from 'express';
import Auth from '../controllers/AuthController';

const { register, login } = Auth;

const router = Router();

router.post('/signup', register);
router.post('/login', login);

export default router;
