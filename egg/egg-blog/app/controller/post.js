const Controller = require('egg').Controller;

class FriendController extends Controller {
  async index () {
    const {ctx} = this;
    const posts = await ctx.service.post.list();
    await ctx.render('index.tpl', {data: posts})
  }
  async new () {
    const { ctx } = this;
    await ctx.render('new.tpl');
  }
  async create() {
    const { ctx } = this;
    let { title, body }= ctx.request.body;
    await ctx.service.post.newPost(title, body);
    ctx.redirect('/posts');
  }
}

module.exports = FriendController;