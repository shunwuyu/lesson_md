const Koa = require("koa");
const app = new Koa();
const route = require('koa-route');
var bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
 
// 临时用一个变量来存储，实际应该存在数据库中
let currentUserName = ''; // 第一步
 
app.use(bodyParser()); // 处理post请求的参数
 
const login = ctx => {
    const req = ctx.request.body;
    const userName = req.userName;
    currentUserName = userName;
 
    ctx.response.body = {
        msg: '登陆成功'
    };
}
 
const home = ctx => {
    ctx.body = currentUserName;
}
app.use(cors());
app.use(route.post('/login', login));
app.use(route.get('/home', home));
app.listen(3200, () => {
    console.log('启动成功');
});
