const express = require('express');
const concat = express.Router();
const db = require('../db/db.js');
const { Concat, Group } = require('../models/data.js');
// const Group = require('../models/group.js');

concat.get('/', async (req, res) => {
  const newConcat = {
    name: '徐琪', 
    company: '腾讯',
    title: 'P7',
    addresses: [
      {
        category: '公司',
        address: '深圳南山区'
      },
      {
        category: '学校',
        address: '南昌市昌北经济技术开发区广兰大道'
      }
    ],
    groups: [
      "5e5f0b72990706cf8d45bb60"
      // {
      //   name: '学员'
      // },
      // {
      //   name: '饭友'
      // }
    ]
  }
  // const newGroup = {
  //   name: '名誉校友'
  // }
  
  // const myxy = new Group(newGroup);
  // myxy
  //   .save((err, saved) => {
  //     res.send({
  //       status: 1,
  //       message: '加成功'
  //     });
  //   })
  const wzh = new Concat(newConcat);
  wzh
    .save((err, saved) => {
      console.log(saved);
      res.json({
        status: 1,
        message: '加成功'
      })
    })
});

concat.get('/all', async(req, res) => {
  Concat.find({})
    .populate('groups')
    .exec((err, concats) => {
      res.json(concats)
    })
})
concat.get('/byGid', async(req, res) => {
  // console.log(req.params, req.query)
  const gid = req.query.gid;
  console.log(gid, '+++++');
  Concat
    .find(
      {
        groups: { $in: ['5e5f0b72990706cf8d45bb60']}
      }
    )
    .exec((err, concats) => {
      res.json(concats)
    })

})

module.exports =  (app) => {
  app.use('/', concat);
}