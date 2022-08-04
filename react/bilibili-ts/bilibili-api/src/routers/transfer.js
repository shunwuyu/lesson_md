const router = require('koa-router')();
const fetch = require('node-fetch');
const fileType = require('file-type');
router.get("/image", async (ctx, next) => {
    
    const url = ctx.query.pic;
    // console.log(url, '--------')
    const res = await fetch(url);
    const data = await res.buffer()
    const type = await fileType(data).mime
    console.log(type);
    ctx.set('Content-Type', type)
    ctx.body = data
    
    // console.log(fileType(data).mime, '////')
    // ctx.set('Content-Type', fileType(data).mime)
    // ctx.body = data
    // fetch(url)
    //   .then(res => res.buffer())
    //   .then(buffer => {
    //     ctx.body = '1111'
    //     console.log(fileType(buffer).mime);
    //     // ctx.set('Content-Type', fileType(buffer).mime)
    //     // ctx.body = buffer
    //     ctx.body = '111'
    // }).catch(next);
  });

module.exports=router.routes();