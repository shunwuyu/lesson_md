const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin
const moment = require('moment');
const fs = require('fs')
// 注册页面
router.get('/signup', async (ctx, next) => {
  await checkNotLogin(ctx)
  await ctx.render('signup', {
    session: ctx.session,
  })
})
router.post('/signup', async (ctx, next) => {
  //console.log(ctx.request.body)
  let user = {
    name: ctx.request.body.name,
    pass: ctx.request.body.password,
    repeatpass: ctx.request.body.repeatpass,
    avator: ctx.request.body.avator
  }
  console.log(ctx.request.body.avator);
  await userModel.findDataByName(user.name)
    .then(async (result) => {
      console.log(result)
      if (result.length) {
        try {
          throw Error('用户已经存在')
        } catch (error) {
          //处理err
          console.log(error)
        }
        // 用户存在
        ctx.body = {
          data: 1
        };;

      } else if (user.pass !== user.repeatpass || user.pass === '') {
        ctx.body = {
          data: 2
        };
      } else {
        // ctx.session.user=ctx.request.body.name   
        // data:image/png;base64,iVB
        let base64Data = user.avator.replace(/^data:image\/\w+;base64,/, "");
        let dataBuffer = new Buffer(base64Data, 'base64');
        let getName = Number(Math.random().toString().substr(3)).toString(36) + Date.now()
        await fs.writeFile('./public/images/' + getName + '.png', dataBuffer, err => {
          if (err) throw err;
          console.log('头像上传成功');
        });
        await userModel.insertData([user.name, md5(user.pass), getName, moment().format('YYYY-MM-DD HH:mm:ss')])
          .then(res => {
            console.log('注册成功', res)
            //注册成功
            ctx.body = {
              data: 3
            };
          })
      }
    })
})

module.exports = router