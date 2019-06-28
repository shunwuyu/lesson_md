const Router = require('koa-router');
const { posts, postsDetail } = require('./model.js');
const router = new Router()
let id = -1;
router.get('/', async (ctx, next) => {
  // ctx.router available
  console.log(posts);
  await ctx.render('index', { posts });
});
router.get('/post/:postId', async (ctx, next) => {
  const { postId } = ctx.params;
  const post = postsDetail.find(post => post.id == postId);
  await ctx.render('postDetail', { post });
});
router.get('/create', async (ctx, next) => {
  console.log(1);
  await ctx.render('create');
});
router.post('/create', async (ctx, next) => {
  const { title, content } = ctx.request.body;
  id ++;
  posts.push({
    id,
    title
  })
  postsDetail.push({
    id,
    content
  })
  ctx.redirect('/');
})

module.exports = router