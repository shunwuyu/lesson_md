const express = require('express');
const search = express.Router();
const PostModel = require('../models/post');

search.get('/:keyword', (req, res) => {
  // console.log(req.params);
  const keyword = req.params.keyword;
  PostModel
    .find({
      $text: {
        $search: keyword
      }
    })
    .exec((err, posts) => {
      // console.log(posts);
      res.json(posts);
    })

})

module.exports = search