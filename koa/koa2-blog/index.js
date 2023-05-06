const Koa = require('koa');
const config = require('./config/default.js');
const path = require('path')
const app = new Koa()
const views = require('koa-views')
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser');

app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
}))
app.use(bodyParser({
    formLimit: '1mb'
}))
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))


app.use(require('./routers/signup.js').routes())
app.listen(config.port)