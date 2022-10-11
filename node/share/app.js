const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}));

app.use(async (ctx, next) => {
  if (ctx.request.path === '/') { // 首页
    await ctx.render('index');
  } else if (ctx.request.path === '/getWXApiTicket') {
    ctx.body = {
      res: 0
    }
  }
  await next();
})

app.listen(3000);