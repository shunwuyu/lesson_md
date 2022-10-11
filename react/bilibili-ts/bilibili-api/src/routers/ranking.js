const router = require('koa-router')();
const rankingPartitions = require('../data/rankingPartitions');
const {
    fetchRankingById,
} = require("../api");

router.get("/partitions", (ctx, next) => {
    const resData = {
        code: "1",
        msg: "success",
        data: rankingPartitions
    }
    ctx.body = resData
})

router.get("/:rId", async (ctx, next) => {
    
    const { rId } = ctx.params
    try {
        const data = await fetchRankingById(rId);
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
    } catch(err) {
        next(err)
    }
    // fetchRankingById(ctx.query)
});

module.exports=router.routes();