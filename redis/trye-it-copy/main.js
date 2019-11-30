const http = require('http');

const redis = require('redis');
const client = redis.createClient( 6379, '192.168.43.172');

const server = http.createServer((req, res) => {
  if (req.url == '/api') {
    client.get('api_limit', function(err, count) {
      console.log(count, '++++++++++++++++');
      if (count > 0) {
        client.decrby('api_limit', 1);
        res.writeHead(200, {
          'Content-Type': 'text/json;charset=utf-8'
        })
        res.end(JSON.stringify({name: 'ysw', count:'还可以调用' + count + '次'}));
      } else {
        res.writeHead(400, {
          'Content-Type': 'text/json;charset=utf-8'
        })
        res.end(JSON.stringify({name: 'ysw', mes:'已超过调用上限 '}));
      }
    })
  } else {
    res.end('bad request');
  }
})

server.listen(1234)
client.set('api_limit', 5, function(err, obj) {
  console.log(obj);
})

// client.get('api_limit',  function(err, obj) {
//   console.log(obj, '++++');
// })

