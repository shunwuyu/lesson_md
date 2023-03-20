const userModel = require('../lib/mysql')
const fs = require('fs')
const md5 = require('md5')
const moment = require('moment');
exports.getSignup = async ctx => {
    // await checkNotLogin(ctx)
    await ctx.render('signup', {
        // session: ctx.session,
    })
}

exports.postSignup = async ctx => {
    let { name, password, repeatpass, avator } = ctx.request.body
    // console.log(name, password, repeatpass, avator)
    const result = await userModel.findDataCountByName(name)
    // console.log(result)
    if (result[0].count >= 1) {
        ctx.body = {
            code: 500,
            message: '用户存在'
        };
    } else if (password !== repeatpass || password.trim() === '') {
        ctx.body = {
            code: 500,
            message: '两次输入的密码不一致'
        };
    } else if(avator && avator.trim() === ''){
        ctx.body = {
            code: 500,
            message: '请上传头像'
        };
    } else {
        let base64Data = avator.replace(/^data:image\/\w+;base64,/, ""),
        dataBuffer = new Buffer(base64Data, 'base64'),
        getName = Number(Math.random().toString().substr(3)).toString(36) + Date.now(),
        upload = await new Promise((reslove, reject) => {
            fs.writeFile('./public/images/' + getName + '.png', dataBuffer, err => {
                if (err) {
                    throw err;
                    reject(false)
                };
                reslove(true)
                console.log('头像上传成功')
            });
        });
        if (upload) {
            await userModel.insertData([name, md5(password), getName + '.png', moment().format('YYYY-MM-DD HH:mm:ss')])
            .then(res => {
                console.log('注册成功', res)
                //注册成功
                ctx.body = {
                    code: 200,
                    message: '注册成功'
                };
            })
        } else {
            ctx.body = {
                code: 500,
                message: '头像上传失败'
            }
        }            
    }
}