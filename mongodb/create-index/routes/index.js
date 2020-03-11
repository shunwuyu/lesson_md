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


module.exports =  (app) => {
  app.use('/', user);
}