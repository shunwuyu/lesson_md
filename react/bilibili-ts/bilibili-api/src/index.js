const koa = require("koa");
const app = new koa();
const router = require('koa-router')();
const crossDomain = require("./middleware/cross-domain");
const {
    fetchSuggest
} = require("./api");

router.get('/', ctx => {
    ctx.body = '<h1>欢迎光临index page 页面</h1>';
});

router.get("/search/suggest", async (ctx, next) => {
    const w = encodeURI(ctx.query.w);
    console.log(w, '------------')
    try{
        const data = await fetchSuggest(w);
        // console.log(data);
        let resData = {
            code: "1",
            msg: "success"
        }
        if (data.code === 0) {
            resData.data = data.result;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        // ctx.set('content-type', 'json');
        ctx.body = resData
    } catch(e) {
        next(e)
    } 
})



// // Error handling


app.use(crossDomain);
// 加载路由中间件
app.use(router.routes());

app.use((ctx, err) => {
    ctx.status = 500;
    ctx.body = {
        code: "-1",
        msg: err
    }
});

app.listen(3011, () => {
    console.log("Your app is running");
})