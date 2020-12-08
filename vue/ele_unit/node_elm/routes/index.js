// import admin from './admin'
const admin = require('./admin')
module.exports = app => {
  app.use('/admin', admin);
}