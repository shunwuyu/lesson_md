let Koa = require('./lib/application')
let app = new Koa()


// app.use((req, res) => { // 还没写中间件，所以这里还不是ctx和next
//   console.log(res, '--------------')
//   res.end('hello world')
// })

app.use((ctx) => {

  console.log(ctx.req.url)
  console.log(ctx.request.req.url)
  console.log(ctx.response.req.url)
  console.log(ctx.request.url)
  console.log(ctx.request.path)
  console.log(ctx.url)
  console.log(ctx.path)
  ctx.body = 'hello world';
})

app.listen(1234)