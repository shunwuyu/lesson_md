const Service = require('egg').Service;
class PostService extends Service {
  async list () {
    const posts = await this.ctx.model.Post.findAll();
    return posts
  }
  async newPost (title, body) {
    // console.log(title, body, '---------');
    const post = await this.ctx.model.Post.create({title: title, body: body});
    console.log(post, '+++');
    return post;
  }
}

module.exports = PostService;