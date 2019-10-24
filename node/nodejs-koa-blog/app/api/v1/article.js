const Router = require('koa-router');

const router = new Router({
  prefix: '/v1'
})

/**
 * 获取文章列表
 */
router.get('/article', async (ctx) => {
  ctx.response.status = 200;
  ctx.body = '121212'
});

/**
 * 创建文章
 */
router.post('/article', async (ctx) => {
  console.log(ctx.request.body)
  ctx.response.status = 200;
  ctx.body = '创建文章成功'
})

/**
 * 删除文章
 */
router.delete('/article/:id', async (ctx) => {
  ctx.response.status = 200;
  ctx.body = '删除文章成功'
})

/**
 * 更新文章
 */
router.put('/article/:id', async (ctx) => {
  ctx.response.status = 200;
  ctx.body = '更新文章成功'
})

/**
 * 查询文章详情
 */
router.get('/article/:id', async (ctx) => {
  ctx.response.status = 200;
  ctx.body = '获取';
});

/**
 * 搜索文章
 */
router.get('/search/article', async (ctx) => {
  ctx.response.status = 200;
  ctx.body = '搜索';
});

module.exports = router