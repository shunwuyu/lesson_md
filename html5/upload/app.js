var fs = require('fs');
const path = require('path');
var Koa = require('koa');
const route = require('koa-route');
const koaBody = require('koa-body');
const app = new Koa();
const os = require('os');

app.use(koaBody({ multipart: true }));

const main = ctx => {
    ctx.type = 'html';
    const pathUrl = path.join(__dirname, 'index.html');
    ctx.body = fs.createReadStream(pathUrl);
}
const upload = async ctx => {
    // const file = ctx.request.files.file;
    const tmpdir = os.tmpdir();
    const filePaths = [];
    const files = ctx.request.body.files || {};
    console.log(ctx.request.body, '///');
    for (let key in files) {
      const file = files[key];
      const filePath = path.join(tmpdir, file.name);
      const reader = fs.createReadStream(file.path);
      const writer = fs.createWriteStream(filePath);
      reader.pipe(writer);
      filePaths.push(filePath);
    }
  
    ctx.body = filePaths;
}
app.use(route.get('/', main))
app.use(route.post('/upload', upload))
app.listen(3003);