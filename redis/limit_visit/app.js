const Redis = require('ioredis');
const express = require('express')
const app = express();
const Mac = require('getmac')
// mac 地址  不能做为IP 
const macAddress = Mac.default()
const cache = new Redis({
  port: 6379,
  host: "127.0.0.1"
});


app.get('/', (req, res) => {
  cache
  .get(macAddress)
  .then(data => {
    console.log(data)
    if (data > 5) {
      // throw new Error('big than 5')
      res.json({
        msg: '一秒内只能访问5次'
      })
    }
    if (!data) {
      cache.set(macAddress, 1, 'EX', 60)
    } else {
      cache.incr(macAddress)
    }
    res.json({
      count: data
    })
  })
})

app.listen('3000', () => {

})