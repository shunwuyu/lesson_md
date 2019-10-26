const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const serve = require('koa-static');
const app = new Koa();
app.use(serve(__dirname + './static/'));
app.use(bodyParser());
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
router.get('/', async (ctx) => {
  const query = ctx.query;
  // close browser xss protect
  ctx.set('X-XSS-Protection', 0);
  await ctx.render('index', {
    xss: query.xss
  })
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
});