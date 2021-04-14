const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const views = require('koa-views')
const path = require('path')
const router = new Router();
var bodyParser = require('koa-bodyparser');

// 配置视图
app.use(views(path.join(__dirname, './views'), {
  extension: 'html'
}))

router.get('/', async (ctx) => {

  await ctx.render('index', {});
})

router.post('/api',async (ctx) => {
  ctx.body = ctx.request.body;
})

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods({}));

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);