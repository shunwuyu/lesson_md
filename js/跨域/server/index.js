const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();

app.use(koaStatic(
  path.join(__dirname , './static')
))
router.get('/api/post', async function (ctx) {
  // console.log(ctx.headers);
  console.log('cookies', ctx.cookies.get('name'));
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});
// app.use(async (ctx, next) => {
//   // 允许来自所有域名请求
//   ctx.set("Access-Control-Allow-Origin", "http://localhost:59243");
//   // 这样就能只允许 http://localhost:8080 这个域名的请求了
//   // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080"); 

//   // 设置所允许的HTTP请求方法
//   ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

//   // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
//   ctx.set("Access-Control-Allow-Headers", "X-custom, content-type");

//   // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。


//   // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
//   // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
//   ctx.set("Access-Control-Allow-Credentials", true);

//   // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
//   // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
//   // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
//   ctx.set("Access-Control-Max-Age", 1000 * 60 * 60);
//   await next();
// })

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
});