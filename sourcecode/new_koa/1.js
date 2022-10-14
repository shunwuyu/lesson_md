const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.path); // ctx 使命
  ctx.body = 'Hello World';
});

app.listen(3000); 


// let http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(4000)