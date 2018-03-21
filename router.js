import { Router } from 'express';
import { index } from './controllers/users';

const router = Router();

router.get('users', (req, res) => res.send('users here'));

export default router;
