
const mongoose = require('mongoose')

const DB_URL = 'mongodb://124.71.174.51:27017/tutorial'

mongoose.connect(DB_URL)


mongoose.connection.on('connected',function() {
  console.log('Mongoose connection open to '+DB_URL);
});

mongoose.connection.on('error',function(err) {
  console.log('Mongoose connection error: '+ err);
});

mongoose.connection.on('disconnected',function() {
  console.log('Mongoose connection disconnected');
});

module.exports = mongoose

