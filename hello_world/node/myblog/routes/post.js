const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('主页');
});

module.exports = router