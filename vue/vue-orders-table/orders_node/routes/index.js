const express = require('express');
const orders = express.Router();
const db = require('../db/db.js');
const Order = require('../models/order.js');

// 2d spare 是mongodb 内建的， 独有的功能
// 1. NOSQL 
// 2. 移动时代， 定位功能
orders.get('/', (req, res) => {
  let query = req.query;
  console.log(query);
  // return;
  Order.countDocuments({}, (err, count) => {
    if (err) {
      res.json({
        status: 400,
        msg: JSON.stringify(error)
      });
    } else {
      Order.find({}).skip((query.page - 1) * query.limit).limit(parseInt(query.limit)||20) .sort({ 'orderDate': -1 }).exec((err, doc) => {
        if (err) {
          res.json({
            status: 400,
            msg: JSON.stringify(err)
          });
        } else {
          res.json({
            status: 200,
            result: doc,
            total: count,
            msg:'OK'
          });
        }
      });
    }
  })
})

module.exports =  (app) => {
  app.use('/orders', orders);
}

