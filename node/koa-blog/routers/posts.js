const router = require('koa-router')();
const userModel = require('../lib/mysql.js')
const moment = require('moment')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin;
const md = require('markdown-it')();
// 重置到文章页
router.get('/', async(ctx, next) => {
  ctx.redirect('/posts')
})
router.get('/posts', async (ctx) => {
  ctx.body = 'post page'
})
module.exports = router;