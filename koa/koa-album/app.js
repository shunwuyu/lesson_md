const koa = require('koa');
const fs = require('fs');
const path = require('path');
const koaBody = require('koa-body');
const koaRoute = require('koa-router');
const staticServe = require('koa-static');
const { promisify } = require('util');
let app = new koa();
let router = new koaRoute();
const readDir = promisify(fs.readdir);
app.use(staticServe(__dirname + '/static'));
//  Content-Type 的类型扩充了multipart/form-data 用以支持向服务器发送二进制数据
// app.use();
router.post('/upload', koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024,
    uploadDir: path.join(__dirname, '/static/img'),
    keepExtensions: true,
    hash: true
  },
}), async (ctx) => {
  console.log(ctx.request.files.avatar.path);
  console.log(ctx.request.body);
  // => POST body
  let diskPath = ctx.request.files.avatar.path;
  const fileName = path.basename(diskPath);
  ctx.body = JSON.stringify({
    path: `http://localhost:3000/img/${fileName}`
  });
}
);
router.get('/show', async (ctx) => {
  const files = await readDir(path.join(__dirname, '/static/img'), 'utf8');
  let htmlTemplate = files.map(filename => {
    return `
    <li>
      <a href="./img/${filename}" >
        <img src="./img/${filename}"/>
      </a>
    </li>
    `
  }).join('');
  ctx.body = htmlTemplate;
});
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is running 3000')
});