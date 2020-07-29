const loginRouter = require('./login.js')
const db = require('../db/db.js');

module.exports =  (app) => {
  console.log('--------------------');
  // app.use('/', (req, res) => {
  //   req.session.user_id = '12112'
  //   res.send({
  //     msg: 'ok'
  //   })
  // });
  app.use('/login', loginRouter);
}