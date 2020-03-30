const Koa = require('koa');
const app = new Koa();
// // 3 bodyparser 
// const bodyParser = require('koa-bodyparser')

// // async function first(ctx, next) {
// //   console.log('1');
// //   await next();
// //   await next(); 
// //   console.log(ctx);
// // }
// //2. 前后顺序
// const sayHelloCN = async (ctx) => {
//   ctx.body = '你好世界';
// }

// //中间件 1. 启用函数
// const sayHello = async (ctx) => {
//   ctx.body = 'Hello World';
// }


// app.use( async (ctx) => {
//   ctx.body =  ctx.request.body
// })
// // 3. 换顺序就拿不到
// app.use(bodyParser())

// app.use(sayHello);
// app.use(sayHelloCN);
//  4. 洋葱模型 next 栈
// const one = (ctx, next) => {
//   console.log('>> one');
//   next();
//   console.log('<< one');
// }

// const two = (ctx, next) => {
//   console.log('>> two');
//   next();
//   console.log('<< two');
// }

// const three = (ctx, next) => {
//   console.log('>> three');
//   next();
//   // ctx.body = 'three'
//   console.log('<< three');
// }

// app.use(one);
// app.use(two);
// app.use(three);




// 5. 洋葱模型 next
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  next();
}
// bodyParser  
const main = ctx => {
  ctx.response.body = 'Hello World';
}
app.use(handler);
app.use(logger);
app.use(main);
// app.use(handler);
// end 4


app.listen(3000);