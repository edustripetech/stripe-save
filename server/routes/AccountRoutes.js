import { Router } from 'express';
import AccountController from '../controllers/AccountController';

const { getAllAccounts, getAccountsByUser, setSavingsInterval } = AccountController;
const router = Router();

router.get('/', getAllAccounts);
router.get('/:id', getAccountsByUser);
router.patch('/:id', setSavingsInterval);

export default router;
