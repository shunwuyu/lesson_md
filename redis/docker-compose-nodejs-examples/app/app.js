var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var routes = require('./routes/index');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use('/', routes);

module.exports = app;