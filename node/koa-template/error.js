const Koa = require('koa');
const app = module.exports = new Koa();

// look ma, error propagation!
console.log('NODE_ENV', process.env.NODE_ENV);

app.use(async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    const date = new Date();
    ctx.body = `Error ${date.toLocaleString()}`;
    ctx.app.emit('error', err, ctx);
  }
});

// response

app.use(async (ctx, next) => {
  throw new Error('boom boom');
  await next();
});

app.use(async (ctx) => {
  ctx.body = `hello koa`;
})

// error handler

app.on('error', function(err) {
  if (process.env.NODE_ENV != 'test') {
    console.log(err);
  }
});

if (!module.parent) app.listen(3000);