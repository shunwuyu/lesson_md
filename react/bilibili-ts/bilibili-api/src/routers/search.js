const router = require('koa-router')();
const {
    fetchSuggest,
} = require("../api");

router.get("/suggest", async (ctx, next) => {
    const w = encodeURI(ctx.query.w);
    console.log(w, '--|||----------')
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

module.exports=router.routes();