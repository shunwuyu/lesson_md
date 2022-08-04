const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const path = require('path');
app.use(cors());
const multer = require('koa-multer');
// const body = require('koa-body');
// app.use(body());
const router = require('koa-router')();
let storage = multer.diskStorage({
    destination: path.resolve('upload'),
    filename: (ctx, file, cb)=>{
    cb(null, file.originalname);
    }
    });
    
    let upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (ctx) => {
    // console.log(ctx.req, '-------');
    console.log(ctx.req.body, '////----');
   ctx.body = {
    code : 0
   }
})
app.use(router.routes(), router.allowedMethods())
app.listen(8080)