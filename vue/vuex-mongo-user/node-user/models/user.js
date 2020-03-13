const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  "address": {
    "city": {
      type: String, 
    },
    "state": {
      type: String
    },
    "pincode": {
      type: String
    }
  },
  "tags": [
    {type: String}
  ],
  "name": { type: String }
})

const User = mongoose.model('User', userSchema);
module.exports = User