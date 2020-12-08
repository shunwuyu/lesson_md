const express = require('express')
const config = require('./config/db')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const movie = require('./router/movie')

mongoose.connect(config.mongodb)

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/movie',movie)
app.listen(port, () => {
  console.log(`listening on port 3000`)
})