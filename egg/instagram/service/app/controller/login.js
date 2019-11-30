const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    const { ctx } = this;
    const { password, username, email } = ctx.request.body;
    // console.log(password, username, email);
    await ctx.service.user.register({password, username, email});
  }
  async loginIn () {
    const { ctx } = this;
    const { password, email } = ctx.request.body;
    const token = await ctx.service.user.login({password, email});
    console.log(token, '++++++++++++++++++++++=');
    if (token) {
      const opts = {
        path: '/',
        maxAge: 10000*60*60*24*7,
        // httpOnly: false,
        // domain: '127.0.0.1'
      };
      ctx.cookies.set(this.config.auth_cookie_name, token, opts);
      // console.log(ctx.cookies.get(this.config.auth_cookie_name, token, opts));
      ctx.returnBody(200, "登录成功");
    } else {
      ctx.throw(400, '用户名或密码错误');
    }
  }
  
}
module.exports = LoginController;