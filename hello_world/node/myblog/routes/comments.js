const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  res.send('创建留言');
});

module.exports = router