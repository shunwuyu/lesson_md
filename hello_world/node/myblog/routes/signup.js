const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('注册');
});

module.exports = router