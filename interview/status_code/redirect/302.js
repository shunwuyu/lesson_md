var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(302, {'Location': 'http://itbilu.com/'});
  console.log(res._header);
  res.end();
});

server.listen(3000)