import { Router } from 'express';
import getList from './controllers/getList';

import Order from './models/order';
import User from './models/user';

import getUser from './controllers/getUser';
import { ENDPOINTS } from './constants';

const router = Router();

router.route(ENDPOINTS.users)
  .get(getList(User));

router.route(ENDPOINTS.orders)
  .get(getList(Order));

router.route(ENDPOINTS.user)
  .get(getUser(User));

export default router;
