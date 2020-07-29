let Koa = require('./lib/application')
const fs = require('fs');
let app = new Koa()

// app.use((req, res) => { // 还没写中间件，所以这里还不是ctx和next
  
//   res.end('hello world')
// })

// app.use((ctx) => {
//   console.log('---------')
//   console.log(ctx.req.url)
//   console.log(ctx.request.req.url)
//   console.log(ctx.response.req.url)
//   console.log(ctx.request.url)
//   console.log(ctx.request.path)
//   console.log(ctx.url)
//   console.log(ctx.path)
//   ctx.body = 'hello world'
// })

// app.use((ctx) => {
//   ctx.body = 'hello world'
//   console.log(ctx.body)
// })
// app.use((ctx) => {
//   // ctx.body = {
//   //   username: '刘刘'
//   // }

//   // console.log(ctx.body)
// })

// app.use((crx, next) => {
//   console.log(1)
//   next()
//   console.log(2)
// })
// app.use((crx, next) => {
//   console.log(3)
//   next()
//   console.log(4)
// })
// app.use((crx, next) => {
//   console.log(5)
//   next()
//   console.log(6)
// })


app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
})
app.use(async (ctx, next) => {
  console.log(3)
  let p = new Promise((resolve, roject) => {
      setTimeout(() => {
          console.log('3.5')
          resolve()
      }, 1000)
  })
  await p.then()
  await next()
  console.log(4)
  ctx.body = 'hello world'
})

app.listen(3001)