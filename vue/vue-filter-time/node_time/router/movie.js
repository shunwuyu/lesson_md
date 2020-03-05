const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.post('/', (req, res) => {
  //使用Movie model上的create方法储存数据
  Movie.create(req.body, (err, movie) => {
    if (err) {
      res.json(err)
    } else {
      res.json(movie)
    }
  })
})

module.exports = router