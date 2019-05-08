const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log('-----');
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  const html = `
    <html>
      <head></head>
      <body>
        <a href="?name=yajun&sex=female">点我一下吧</a>
      </body>
    </html>
  ` 
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});