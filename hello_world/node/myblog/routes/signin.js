const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('登录');
});

module.exports = router