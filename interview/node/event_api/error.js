const Koa = require('koa');
const { EventEmitter } = require("events"); 
const app = new Koa();
// console.log(app instanceof EventEmitter);
app.use( async (ctx) => {
  ctx.throw(500);
  // ctx.body = 'hello world';
})

// app.use(async (ctx, next) => {
//   await next();
//   if(parseInt(ctx.status) === 404 ){
//     ctx.response.redirect("/404")
//   }
// })


app.on('error', (err, ctx) =>{
  console.error('server error', err);
});

app.listen(3000);