const Koa  = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path');
const views = require('koa-views')

app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

app.use(async(ctx)=>{
    if(ctx.url=== '/index'){
        ctx.cookies.set(
            'MyName','JSPang',{
                domain:'127.0.0.1', // 写cookie所在的域名
                // path:'/',
                // path:'/index',       // 写cookie所在的路径
                maxAge:1000*60*60*24,   // cookie有效时长
                expires:new Date('2022-12-31'),
                // expires:new Date('2018-12-31'), // cookie失效时间
                httpOnly:true,
                // httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        );
        ctx.body = 'cookie is ok';
    } else if (ctx.url == '/loc_storage') {
      let title = 'localStorage'
      await ctx.render('index', {
        title,
      })
    } else {
        if( ctx.cookies.get('MyName')){
            ctx.body = ctx.cookies.get('MyName');
        }else{
            ctx.type = 'text/html;charset=utf-8';
            ctx.body = 'Cookie is none';
        }
      
    }
});
 
app.listen(1234,()=>{
    console.log('[demo] server is starting at port 1234');
})