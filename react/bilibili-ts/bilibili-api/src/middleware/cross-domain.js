// const whiteList = process.env.WHITE_LIST.split(",");
module.exports = async (ctx, next) => {
    // const origin = req.get("Origin");
    // if (origin) {
    //   const allowOrigin = whiteList.find((url) => origin.indexOf(url) !== -1);
    //   if (allowOrigin) {
        // res.header("Access-Control-Allow-Origin", origin);
    ctx.set("Access-Control-Allow-Origin", '*');
    ctx.set("Access-Control-Allow-Headers", "Content-Type");
    ctx.set("Access-Control-Allow-Methods","POST,GET,OPTIONS");
    //   }
    // }
    await next();
}