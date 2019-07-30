const userModel = require('../lib/mysql.js');

exports.getSignup = async ctx => {
  await ctx.render('signup')
}

exports.postSignup = async ctx => {
  let { name, password, repeatpass, avator } = ctx.request.body;

  await userModel.findDataCountByName(name)
    .then(async (result) => {
        console.log(result)
    });

}