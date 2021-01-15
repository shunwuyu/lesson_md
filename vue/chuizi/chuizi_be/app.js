var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var users = require('./routes/users');
var db = require('./db/db.js');
var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(cookieParser());
app.use('/users', users);
app.listen(3000);