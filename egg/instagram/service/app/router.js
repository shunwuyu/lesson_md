'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiV2Router = app.router.namespace('/api/v2');
  apiV2Router.post('/login/register', controller.login.register)
  apiV2Router.post('/login/register', controller.login.register)
  apiV2Router.post('/login', controller.login.loginIn)
};
