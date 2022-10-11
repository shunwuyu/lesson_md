const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const jwt = require('jsonwebtoken');

const verify = require('./verify.js');
const app = new Koa();
const secret = 'secret';
const user = [
  {
    id: 1,
    name: '123',
    pwd: '456',
    userInfo: {
      sex: '男',
      age: 20
    }
  }
]
app.use(bodyParser());
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
router.get('/login', async (ctx) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
})
router.post('/login', async function (ctx) {
  const { name, pwd } = ctx.request.body;
  const token = jwt.sign({
    id: 1
  }, secret, { expiresIn: 60 });  
  ctx.body = {
    code: 200,
    token,
  }
});
router.get('/showUser', async (ctx) => {
  await ctx.render('showUser');
})
router.get('/401', async (ctx) => {
  await ctx.render('401', {
    list: [
      {err: 'err1'},
      {err: 'err2'}
    ]
  });
})
router.get('/userInfo', verify, async (ctx) => {
  ctx.body = {
    code: 200,
    name: 123,
    id: 1
  }
})
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
});