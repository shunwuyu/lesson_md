const Koa = require('koa')
const cors = require("koa2-cors")
const app = new Koa()

app.use(cors());

app.use( async ( ctx ) => {
  ctx.body = {
    data: "123"
  }
})



app.listen(3000)