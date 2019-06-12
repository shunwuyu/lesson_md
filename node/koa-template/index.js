const path = require('path');
const ejs = require('ejs');
const views = require('koa-views');
const Koa = require('koa');
const app = new Koa();

// 视图层 放在哪里
app.use(
  views(path.join(__dirname, '/views'), { 
    extension: 'ejs' 
  })
);
const user = {
  name: 'AJie',
  post: [
    {
      id: 0,
      title: '流动的SVG线条',
    },
    {
      id: 1,
      title: 'Vue-js 源码解读系列——this 直接调用数据源',
    }
  ]
};
const posts = [
  {
    id: 0,
    content: '是不是很酷炫，这个效果是用SVG+CSS实现的，现在我们就来一起解构一下这个动画的实现'
  },
  {
    id: 1,
    content: '<strong>阿杰 np 就完事了</strong>'
  }
]
app.use(async (ctx) => {
  if (ctx.path === '/user') {
    await ctx.render('user', { user });
  } else if (ctx.path === '/post') {
    const { id }  = ctx.query;
    const post = posts.find(article => article.id == id);
    await ctx.render('post', { post });
  } else {
    ctx.body = `无法处理你的请求${ctx.request.url}`
  }
})
app.listen(3000);