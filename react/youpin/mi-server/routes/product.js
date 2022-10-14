const { Router } = require('express');
const {
	queryProductInfo
} = require('../utils/tools');

const express = require('express'),
	route = express.Router();

route.get('/list', (req, res) => {
  console.log('------------------');
  res.send({
    data: req.$PRODUCT_DATA,
    code: 0
  });
});

route.get('/info', (req, res) => {
  const data = queryProductInfo(req, req.query.id);
  if (data) {
    res.send({
      data,
      code: 0
    })
  }
})

module.exports = route;