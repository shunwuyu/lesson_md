var Koa = require('koa');
var Router = require('koa-router');
const koaBody = require('koa-body');
const ejs = require('ejs');
const views = require('koa-views');
const path = require('path');
var app = new Koa();

const router = require('./router'); 

app.use(koaBody({ multipart: true }));
// 视图层 放在哪里
app.use(
  views(path.join(__dirname, '/views'), { 
    extension: 'ejs' 
  })
);
 
app
  .use(router.routes())
  .use(router.allowedMethods());
  
app.listen(7777, () => {
  console.log('running 7777');
})
