import { Application, Router } from 'egg';

export default (app: Application) => {
  const { controller } = app;
  const { login } = controller
  app.router.post('/login/register', login.register);
}