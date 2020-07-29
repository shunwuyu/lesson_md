const express = require('express');
const orders = express.Router();
const db = require('../db/db.js');
const Order = require('../models/order.js');
// const mongoose = require('mongoose');
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
// 上半年订单数
orders.get('/halfYearOrderCounts', (req, res) => {
  Order.aggregate([
    {
        // 步骤1：匹配条件
        $match: {
            status: {
                $ne: "cancelled"
            },
            orderDate: {
                $gte: new Date("2019-01-01"),
                $lt: new Date("2019-07-01")
            }
        }
    }, {
        // 步骤2：取出年月
        $project: {
            month: {
                $dateToString: {
                    date: "$orderDate",
                    format: "%G年%m月"
                }
            }
        }
    }, {
        // 步骤3：按年月分组汇总
        $group: {
            _id: "$month",
           
            count: {
                $sum: 1
            }
        }
    },
    {
      $sort: {
        _id: 1
      }
    }
  ]).exec((err, docs) => {
    if (err) {
      res.json({
        status: 400,
        msg: JSON.stringify(err)
      })
    } else {
      res.json({
        status: 200,
        result: docs,
        msg:'OK'
      })
    }
    console.log(err, docs);
  })
})

module.exports =  (app) => {
  app.use('/orders', orders);
}

