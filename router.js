import { Router } from 'express';
import users from './controllers/users';
import orders from './controllers/orders';

const router = Router();

router.route('/users')
  .get(users);

router.route('/orders')
  .get(orders);
export default router;
