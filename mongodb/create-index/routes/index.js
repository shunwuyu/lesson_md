const express = require('express');
const user = express.Router();
const db = require('../db/db.js');
const User = require('../models/user.js');

user.get('/', async(req, res) => {
  console.log('----------------')
  User.find({})
    .exec((err, concats) => {
      res.json(concats)
    })
})

user.get('/tag/:tag', async(req, res) => {
  // console.log('----------------')
  const tag = req.params.tag;
  // console.log(tag);
  User.find({tags: tag})
    .exec((err, concats) => {
      res.json(concats)
    })
})

user.post('/', async(req, res) => {
  console.log('----------------')
  const ysw = new User({
    address: {
      city: 'Los Angeles',
      state: 'California',
      pincode: "123"
    },
    tags: [
      "music",
      "cricket",
      "blogs"
    ],
    name: "Tom Benzamin"
  });

  ysw
    .save((err, saved) => {
      res.json({
        status: 1,
        message: '加成功'
      })
    })


  // User.find({})
  //   .exec((err, concats) => {
  //     res.json(concats)
  //   })
})


module.exports =  (app) => {
  app.use('/users', user);
}