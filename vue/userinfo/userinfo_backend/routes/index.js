const loginRouter = require('./login.js')
const db = require('../db/db.js');

module.exports =  (app) => {
  console.log('--------------------');
  app.use('/login', loginRouter);
}