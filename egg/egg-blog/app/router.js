'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/posts', controller.post.index);
  router.get('/posts/new', controller.post.new);
  router.post('/posts', controller.post.create);
};
