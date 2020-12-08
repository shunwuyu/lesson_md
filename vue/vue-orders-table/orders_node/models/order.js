const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // 必填
    // index: true
  }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;