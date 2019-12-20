const Koa = require('koa')
const config = require('./config/default')
const ModelDb = require('./db')
 
const app =  new Koa()
 
app.use(async (ctx) => {
  console.log('+++++');
    let data = await ModelDb.query()
    ctx.body = data
})
 
 
app.listen(config.port)
 
console.log(`listening on port ${config.port}`)