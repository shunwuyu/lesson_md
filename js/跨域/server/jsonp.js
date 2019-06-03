const Koa = require('koa');
const app = new Koa()
const router = require('koa-router')();

router.get('/post', async function (ctx) {
  const posts = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
  let cb = ctx.request.query.callback;
  ctx.type = 'text';
  ctx.body = cb + '(' + JSON.stringify(posts) + ')';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
});