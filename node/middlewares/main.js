const Koa = require("koa");
let app = new Koa();
app.use(async (ctx, next)=>{
  try{
      await next();   // 执行后代的代码
  }catch(err){
    
      // 如果后面的代码报错 返回500
    // ctx.body = "500"
    // ctx.respose.status = err.statusCode ||err. status || 500;
    // console.log(err.statusCode)
    ctx.response.type = 'html';
		ctx.response.body = `<p>出错啦 ${err.statusCode}</p>`;
		ctx.app.emit('error', err, ctx);
  }
})

app.use((ctx) => {
  ctx.throw(500)
  // ctx.response.status = 404;
  // ctx.throw(404)
})

app.listen(8000);

