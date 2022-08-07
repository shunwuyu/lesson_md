const Koa = require("koa");
const cors = require("koa-cors");
const session = require("koa-session");
const router = require('koa-router')();
const authRouter = require('./routers/auth'); 
const testRouter = require('./routers/test'); 
const bodyParser = require('koa-bodyparser')
const app = new Koa();
app.keys = ['bezkoder-secret-key'];
app.use(cors());
app.use(bodyParser())

const CONFIG = {
    key: 'bezkoder-session', /** (string) cookie key (default is koa.sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    secure: false, /** (boolean) secure cookie*/
    sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
  };

app.use(session(CONFIG, app));

router.use('/api/auth', authRouter);
router.use('/api/test', testRouter)
app.use(router.routes());
app.listen(8081, () => {
    console.log(`Server is running on port 8081.`);
});
