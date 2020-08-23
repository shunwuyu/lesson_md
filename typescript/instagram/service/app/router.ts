import { Application, Router } from 'egg';

export default (app: Application) => {
  const { controller } = app;
  const { user } = controller
  const apiV2Router: Router = app.router.namespace('/api/v2');

  apiV2Router.get('/user/info', user.userInfo);
}