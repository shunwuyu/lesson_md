const Koa = require('koa');
const app = new Koa();
const path = require('path');
const views = require('koa-views')
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  if (ctx.path === '/qrcode/check') {
    // console.log('----------');
    var num1 =Math.floor(Math.random()*10+1);
    var num2 =Math.floor(Math.random()*10+1);
    console.log(num1, num2);
    let rel = await Promise.race([delay(1000 * num1), getRel(1000 * num2)]);
    ctx.body = rel;
    return 
  }
  let title = 'hello koa2'
  await ctx.render('index', {
      title
  })
})

// response


function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({status: 'delayed'});
        }, ms);
    });
}

function getRel(ms) {
    return new Promise(resolve => {
        let time = new Date();
        let it = setInterval(() => {
            if (Date.now() - time > ms) {
                clearInterval(it);
                resolve({status: 'gotRel'});
            }
        }, 10);
    });
}

const port = 3000;

app.listen(port, err => {
    if (err) {
        console.error(`err: ${err}`);
    }
    console.log(`server start listening ${port}`);
});