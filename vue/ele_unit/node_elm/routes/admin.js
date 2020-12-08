// import express from 'express'
const express = require('express')
const Admin = require('../controller/admin/admin')
// import Admin from '../controller/admin/admin'
const router = express.Router()

router.post('/login', Admin.login);



module.exports = router