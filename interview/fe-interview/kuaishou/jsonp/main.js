const http = require('http');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((req, res) => {
  // console.log(req.params, '-------');
  const query = (querystring.parse(req.url));
  var _callback = query.callback ? query.callback : '';
  // console.log(_callback);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  if (_callback) {
    res.end(`${_callback}(${JSON.stringify({
      msg: 'hello world'
    })})`);
  } else {
    res.end(JSON.stringify(
      JSON.stringify({
        msg: 'hello world'
      })
    ))
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});