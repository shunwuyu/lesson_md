const Koa=require('koa');
const path=require('path');
const app = new Koa();
const staticCache = require('koa-static-cache')
const config = require('./config/default.js');
const router=require('koa-router');
const ejs=require('ejs');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');



app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use(bodyParser({
  formLimit: '1mb'
}))

app.use(require('./routers/signup.js').routes())
app.listen(3000)
console.log(`listening on port ${config.port}`)