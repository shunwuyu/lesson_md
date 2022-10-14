var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/api', (req, res) => {
  res.json({
    msg: 'hello, world'
  })
})
app.listen(3000)