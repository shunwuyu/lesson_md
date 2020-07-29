import { Controller } from 'egg';

export default class UserController extends Controller {
  /**
   * GitHub 登录
   * @memberof UserController
   */
  public async githubLogin() {
    const { ctx, app } = this;
    const { client_id, client_secret } = app.config.github;
    const code = ctx.query.code;

    const tokenResult = await ctx.curl('https://github.com/login/oauth/access_token', {
      method: 'POST',
      contentType: 'json',
      data: {
        client_id,
        client_secret,
        code,
      },
      dataType: 'json',
      timeout: 8000,
    });

    if (tokenResult.data.error || tokenResult.status !== 200) {
      return await this.ctx.render('transit.html', { uuid: tokenResult.data.error });
    }

    const { access_token } = tokenResult.data;
    const userResult = await ctx.curl(`https://api.github.com/user?access_token=${access_token}`, {
        dataType: 'json',
        timeout: 8000,
    });

    if (userResult.data.error || userResult.status !== 200) {
      return await this.ctx.render('transit.html', { uuid: userResult.data.error });
    }
    
    // ctx.body = {
    //   name: 'github 登陆',
    // };
  }
}