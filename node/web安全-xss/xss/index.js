const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const serve = require('koa-static');

const app = new Koa();
app.use(bodyParser());
app.use(serve(path.join(__dirname, './static/')));
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
let comments = {}
var html_encode = function(str) {
  var s = ''
  s = str.replace(/&/g, "&gt;");
  s = str.replace(/</g, "&lt;");
  s = str.replace(/>/g, "&gt;");
  s = str.replace(/\s/g, "&nbsp;");
  s = str.replace(/\'/g, "&#39;");
  s = str.replace(/\"/g, "&quot;");
  s = str.replace(/\n/g, "<br>");
  return s;
}
router.get('/', async (ctx) => {
  await ctx.render('comment');
})
router.get('/comment', async (ctx) => {
  const query = ctx.query;
  comments.v = html_encode(query.comment)
  ctx.body = {
    code: 300
  }
})
router.get('/getcomment', async (ctx) => {
  // const query = ctx.query;
  // comments.v = html_encode(query.comment)
  console.log(comments);
  ctx.body = {
    comment: comments.v
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
});