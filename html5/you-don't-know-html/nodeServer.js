const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  ctx.set("Access-Control-Allow-Headers", "X-custom, content-type");
  ctx.set("Access-Control-Allow-Credentials", true);
  ctx.set("Access-Control-Max-Age", 1000 * 60 * 60);
  await next();
})
app.use(koaStatic(
  path.join(__dirname , './static')
))

router.get('/api/post', async function (ctx) {
  // console.log(ctx.headers);
  // console.log('cookies', ctx.cookies.get('name'));
  ctx.cookies.set('key11', 'value');
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});
app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(9999, () => {
  console.log('server is running 9999');
});