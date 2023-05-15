const http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, {'Content-type': 'text/json'});
    res.write(JSON.stringify({a:1}));
    res.end();
  }
});
server.listen('8080', function () {
  console.log((new Date()) + ' Server is listening on port 8080', 8080);
});