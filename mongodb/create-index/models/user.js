const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const addressSchema = new Schema({
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

addressSchema.index({tags: 1});
const Address = mongoose.model('Address', addressSchema);
module.exports = Address