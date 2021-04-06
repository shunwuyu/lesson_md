import { Controller } from 'egg';
export default class UserController extends Controller {
  async regiter() {
    const { ctx } = this;
    console.log(ctx.params, '++++++++++++++++++')
    await ctx.service.user.register();
  }
}