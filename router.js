import { Router } from 'express';
import getList from './controllers/getList';
import registerAndLogin from './controllers/registerAndLogin';
import Order from './models/order';
import User from './models/user';

import { ENDPOINTS } from './constants';

const router = Router();

router.route(ENDPOINTS.users)
  .get(getList(User));

router.route(ENDPOINTS.orders)
  .get(getList(Order));

router.route(ENDPOINTS.login_user)
  .post(registerAndLogin(User));

export default router;
