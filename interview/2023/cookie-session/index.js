const Koa = require('koa');
const session = require('koa-session');
const app = new Koa();
app.keys = ['dddfshunwuyu1112ddf'];
const CONFIG = {
  key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 1000 * 1000, // 过期时间 单位毫秒
  autoCommit: true, /** (boolean) 是否自动提交请求头 (default true) */
  overwrite: true, /** (boolean) 是否允许覆盖 (default true) */
  httpOnly: true, /** (boolean) 是否只能在服务端使用 (default true) */
  signed: true, /** (boolean) 是否签名 (default true) */
  rolling: false, /** (boolean) 在每次请求时强行设置 cookie，这将重置 cookie 过期时间 (default is false) */
  renew: true, /** (boolean) 会话即将过期时续订会话 (default is false)*/
  secure: false, /** (boolean) 是否启用https*/
  sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};

app.use(session(CONFIG, app));
app.use(ctx => {
    // ignore favicon
    if (ctx.path === '/favicon.ico') return;
    if (ctx.path === '/login') {
        ctx.session.isLogined = true
    }
    if (ctx.path === '/logout') {
        ctx.session.isLogined = false
    }
    
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = n + ' views  ' + ctx.session.isLogined;
});
app.listen(3000)