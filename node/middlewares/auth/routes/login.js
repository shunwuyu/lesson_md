const Router = require("koa-router");
const router = new Router({
  prefix: "/login"
})

router.get("/" , (ctx) => {
  ctx.cookies.set(
    
    'username','ysw',
    {
      domain:'localhost',
      path:'/', 
      maxAge: 30*60*60*24,
      expires:new Date('2020-4-12'),
      httpOnly:false,
      overwrite:false
    }
  )
  ctx.body = '登录成功'
});
module.exports = router;