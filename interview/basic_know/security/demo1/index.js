
const Koa = require("koa");
const app = new Koa();
 
// app.use(async ctx => {
//     // ctx.body 即服务端响应的数据
//     ctx.body = '<script>alert("反射型 XSS 攻击")</script>';
// })

// 反射型XSS1
// 举一个常见的场景，我们通过页面的url的一个参数来控制页面的展示内容，比如我们把上面的一部分代码改成下面这样
app.use(async ctx => {
    // ctx.body 即服务端响应的数据
    // http://localhost:3000/?userName=%3Cscript%3Ealert(%22%E5%8F%8D%E5%B0%84%E5%9E%8BXSS%E6%94%BB%E5%87%BB%22)%3C/script%3E
    ctx.body = ctx.query.userName;
})
 
app.listen(3000, () => {
    console.log('启动成功');
});