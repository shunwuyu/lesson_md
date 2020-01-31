const router = require('koa-router')()
var uuid = require('uuid')

router.get('/', async (ctx, next) => {
  ctx.body = {
    success: true,
    message: 1
  } 
});

router.get('/string', async (ctx, next) => {
  // console.log('--------');
  await ctx.render('index', {title: '首页'})
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/form', async (ctx, next) => {
  ctx.body = ctx.request.body;
})

module.exports = router