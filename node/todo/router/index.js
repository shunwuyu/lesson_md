const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

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

module.exports = router