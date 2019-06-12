
/**
 * Module dependencies.
 */

const serve = require('koa-static');
// can handle three type requests
// multipart/form-data
// application/x-www-urlencoded
// application/json
const koaBody = require('koa-body');
const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const app = new Koa();

// log requests


app.use(koaBody({ multipart: true }));

// custom 404

// serve files from ./public

app.use(serve(path.join(__dirname, '/public')));

// handle uploads

app.use(async function(ctx, next) {
  // ignore non-POSTs
  console.log(1);
  if ('POST' != ctx.method) return await next();
  console.log(ctx.request.body);
  const file = ctx.request.files.file;
  // 临时目录
  console.log('文件原地址', file.path);
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(path.join(__dirname, './public/', file.name));
  reader.pipe(stream);
  console.log('uploading %s -> %s', file.name, stream.path);
  console.log(1);
  ctx.redirect('/');
});

// listen

app.listen(3000);
console.log('listening on port 3000');
