const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  "userId": String,
  "userName": String,
  "userPwd": String,
  "avatar": String,
  "name": String
});

module.exports = mongoose.model('User', userSchema)