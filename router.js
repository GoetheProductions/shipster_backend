import { Router } from 'express';
import users from './controllers/users';

const router = Router();

router.route('/users')
  .get(users);

export default router;
