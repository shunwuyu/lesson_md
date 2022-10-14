const koa = require("koa");
const app = new koa();
const router = require('koa-router')();
const mainRouter = require('./routers/main');
const searchRouter = require('./routers/search');
const rankingRouter = require('./routers/ranking');
const transferRouter = require('./routers/transfer');
const crossDomain = require("./middleware/cross-domain");

router.get('/', ctx => {
    ctx.body = '<h1>欢迎光临index page 页面</h1>';
});

router.get("/round-sowing", async (ctx, next) => {
    try {
        const data = await fetchRoundSowing()
        let resData = {
            code: "1",
            msg: "success"
        }
        if (data.code === 0) {
            resData.data = data.data;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        ctx.body = resData
    } catch(e) {
        next(e)
    }
})
// // Error handling
app.use(crossDomain);
// 加载路由中间件
router.use(mainRouter);
router.use('/search', searchRouter);
router.use('/ranking', rankingRouter);
router.use('/transfer', transferRouter);
app.use(router.routes());

app.use((ctx, err) => {
    ctx.status = 500;
    ctx.body = {
        code: "-1",
        msg: err
    }
});

app.listen(3012, () => {
    console.log("Your app is running");
})