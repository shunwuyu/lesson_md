const searchRouter = require('./search.js')
// const db = require('../db/db.js');
const postsRouter = require('./posts.js')
module.exports =  (app) => {
  app.use('/search', searchRouter);
  app.use('/posts', postsRouter);
}