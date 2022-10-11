
const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        demo1
    </body>
    </html>`)
})
app.get('/balance', (req, res) => {
  res.send({
    a: 1
  })
})

app.listen(port, () => {
  console.log(`listen on ${port}`)
})
