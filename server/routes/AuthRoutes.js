import { Router } from 'express';
import Auth from '../controllers/AuthController';
import AuthValidation from '../middleware/AuthValidation';

const { register, login } = Auth;
const { validateRegistration } = AuthValidation;

const router = Router();

router.post('/signup', validateRegistration, register);
router.post('/login', login);

export default router;
