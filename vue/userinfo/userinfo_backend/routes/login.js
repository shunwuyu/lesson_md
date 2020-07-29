const express = require('express');
const login = express.Router();
const User = require('../controller/user')

login.post('/', User.login)

module.exports = login