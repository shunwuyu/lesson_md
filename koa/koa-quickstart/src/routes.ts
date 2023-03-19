import Router from '@koa/router';
import AuthController from './controllers/auth';
import UserController from './controllers/user';

const router = new Router();

const unprotectedRouter = new Router();

// auth 相关的路由
// router.post('/auth/login', AuthController.login);
// router.post('/auth/register', AuthController.register);
unprotectedRouter.post('/auth/login', AuthController.login);
unprotectedRouter.post('/auth/register', AuthController.register);


const protectedRouter = new Router();

// router.get('/users', UserController.listUsers);
// router.get('/users/:id', UserController.showUserDetail);
// router.put('/users/:id', UserController.updateUser);
// router.delete('/users/:id', UserController.deleteUser);

protectedRouter.get('/users', UserController.listUsers);
protectedRouter.get('/users/:id', UserController.showUserDetail);
protectedRouter.put('/users/:id', UserController.updateUser);
protectedRouter.delete('/users/:id', UserController.deleteUser);

// export default router;
export { protectedRouter, unprotectedRouter };