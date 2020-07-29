const express = require('express');
const user = express.Router();
const db = require('../db/db.js');
const User = require('../models/user.js');

user.get('/', async(req, res) => {
  User // mongoose 
    .find({})
    .exec((err, concats) => {
      res.json(concats);
    })
})

user.get('/tag/:tag', async(req, res) => {
  const tag = req.params.tag;
  // console.log(tag, 'node');
  User
    .find({tags: tag})
    .exec((err, users) => {
      res.json(users)
    })

})


module.exports =  (app) => {
  app.use('/users', user);
}