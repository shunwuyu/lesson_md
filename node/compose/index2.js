// 第一个中间件得到最后一个中间件的值
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(1);
    await next();
    // 取出lastVal
    console.log(1.1, ctx.lastVal);
});

app.use(async (ctx, next) => {
    console.log(2);
    await next();
    console.log(2.2);
});

app.use(async (ctx, next) => {
    console.log(3);
    await next();
    console.log(3.3);
    // 设置lastVal
    ctx.lastVal = 3.3;
});

app.listen(3000, () => console.log('listening 3000'));
