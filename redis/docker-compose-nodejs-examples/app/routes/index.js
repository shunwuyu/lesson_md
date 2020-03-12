var express = require('express');
var redis = require('redis');
var router = express.Router();

// var host = '192.168.31.128';
var host = '127.0.0.1';
var port = 6379;
var client = redis.createClient(port, host);

router.get('/', function(req, res, next) {
  // 先1 
  client.incr('counter', function(err, result) {
    console.log(result, '---------')
    if (err) {
      return next(err);
    }
    res.render('index', { title: 'Express', counter: result });
  })
});

module.exports = router;