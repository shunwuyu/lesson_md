[source](https://github.com/koala-coding/dockerstudy)

- 创建了一个node 项目， bin
- .dockerignore
  .git nodemodules
- npm 使用 koa
  - error
    onerror(app)
    error 处理中间件
    app.use(ctx => {
      foo();
      ctx.body = fs.createReadStream('not exist');
    });
  - koa-views
    const views = require('koa-views')
    app.use(views(__dirname + '/views', {
      extension: 'pug'
    }))
    await ctx.render('index', {title: '首页'})
  - body-parser
    const bodyparser = require('koa-bodyparser')
    app.use(bodyparser({
      enableTypes:['json', 'form', 'text']
    }))
    router.post('/form', async (ctx, next) => {
      ctx.body = ctx.request.body;
    })
  - logger
    app.use(async (ctx, next) => {
      const start = new Date()
      await next()
      const ms = new Date() - start
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
    })
  

