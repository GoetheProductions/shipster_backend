import { Router } from 'express';
import { index } from './controllers/users';

const router = Router();

router.route('/api/users')
  .get(index)

export default router;
