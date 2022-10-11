const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')
var ObjectId = require('mongodb').ObjectID;
router.post('/', (req, res) => {
  //Todo model上的create方法储存数据
  Todo.create(req.body, (err, todo) => {
    if (err) {
      res.json(err)
    } else {
      res.json(todo)
    }
  })
})
router.get('/:id', (req, res) => {
  //Todo model上的create方法储存数据
  // console.log(req.params.id);
  console.log(req.params.id)
  Todo
    .findOne({"_id": ObjectId(req.params.id)}, function(err, todo) {
      console.log(new Date(todo.start).getMonth())
      res.json(todo)
    })

  // Todo.create(req.body, (err, todo) => {
  //   if (err) {
  //     res.json(err)
  //   } else {
  //     res.json(todo)
  //   }
  // })
})

module.exports = router