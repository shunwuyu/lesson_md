const Router = require("koa-router");
const router = new Router({
  prefix: "/posts"
})
// version 1
// const auth = (ctx, next) => {
//   console.log('auth');
//   next();
// } 

const auth = (ctx, next) => {
  if (ctx.cookies.get('username')) {
    next()
  } else {
    ctx.redirect('/login')
  }
  // console.log(ctx.cookies.get('username'), '------');
  // ctx.redirect('/login')
}


router.post("/", auth ,(ctx) => {
  ctx.body = '发表'
});

router.get("/" ,(ctx) => {
  ctx.body = '列表页'
});


module.exports = router;