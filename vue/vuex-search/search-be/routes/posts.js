const express = require('express');
const posts = express.Router();
const PostModel = require('../models/post');
posts.post('/', (req, res) => {
  // console.log(req.params);
  const promise = PostModel.create([
    { title: "I love javascript" },
    { title: "I love python" },
    { title: "I love go" },
    { title: "I love java" },
    { title: "I love c++" },
  ]); 
  promise.then(function (docs) {
    res.json(docs)
  })
  .catch(err => {
    console.error(err)
  })
})

module.exports = posts