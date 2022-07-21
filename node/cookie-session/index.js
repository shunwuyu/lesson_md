const Koa = require('koa');
const Router = require('koa-router');
const koaSession = require('koa-session');
const staticServe = require('koa-static');
const path = require('path');
const router = new Router();
const app = new Koa();
const session_signed_key = ["secret"];

app.keys = session_signed_key;
const session_config = {
  key: 'koa:sess', /**  cookie的key。 (默认是 koa:sess) */
  maxAge: 1000 * 60,   /**  session 过期时间，以毫秒ms为单位计算 。*/
  autoCommit: true, /** 自动提交到响应头。(默认是 true) */
  overwrite: true, /** 是否允许重写 。(默认是 true) */
  httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
  signed: true, /** 是否签名。(默认是 true) */
  rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
};
const session = koaSession(session_config, app)

// 使用中间件，注意有先后顺序
app.use(session);
app.use(staticServe(path.join(__dirname, 
  './static')));
router.get('/test', async (ctx) => {
  // koa ms
  // js s
  // console.log(ctx.cookies.get('name'), ctx.cookies.get('user'));
  ctx.cookies.set('name', 'this is name', {
    path: '/user',
    maxAge: 10 * 60 * 1000,
    domain: '.juejin.im',
    httpOnly: true
  });
  ctx.body = '/'
})
// router.get('/user', async (ctx) => {
//   console.log(ctx.cookies.get('name'), ctx.cookies.get('user'));
//   ctx.cookies.set('user', 'this is user');
//   ctx.body = 'user';
// })
// // /user 的 cookie 在其 子路径下面也能生效
// router.get('/user/123456', async (ctx) => {
//   console.log(ctx.cookies.get('name'), ctx.cookies.get('user'));
//   ctx.body = '/user/123456';
// })
router.get('/login', async (ctx) => {
  const { userName, password } = ctx.query;
  console.log({userName, password});
  const isTrue = userName === 'test' && password === 'test';
  if (isTrue) {

    ctx.session.login = {
      name: userName,
      uid: 2,
      sex: '男'
    }
    ctx.type = 'html'
    ctx.body = `
    登录成功
    <a href="/testlogin">去测试登录</a>
    `;
  } else {
    ctx.session.login = {};
    ctx.body = '账户错误';
  }
})
router.get('/testlogin', async (ctx) => {
  console.log(ctx.session, '/////');
  if (!ctx.session.login.name) {
    ctx.redirect('/');
  }
   else {
     ctx.body = '已经登录' + ctx.session.login.name;
   }
})
// 10 * 1000 10min
router.get('/', async (ctx) => {
  ctx.cookies.set('name', 'this is name', {
    path: '/',
    maxAge: 1000 * 10 * 60,
    httpOnly: true
  });
  ctx.body = `
  <div>
    <li><a href="/">/</a></li>
    <li><a href="/user">/user</a></li>
    <li><a href="/user/abc">/user/abc</a></li>
  </div>
  `
})
router.get('/user', async (ctx) => {
  ctx.body = `
  <div>
    <li><a href="/">/</a></li>
    <li><a href="/user">/user</a></li>
    <li><a href="/user/abc">/user/abc</a></li>
  </div>`
})
router.get('/user/abc', async (ctx) => {
  ctx.body = `
  <div>
    <li><a href="/">/</a></li>
    <li><a href="/user">/user</a></li>
    <li><a href="/user/abc">/user/abc</a></li>
  </div>
  `
})
app.use(router.routes())

app.listen(9090, () => {
  console.log('server is running 9090');
})