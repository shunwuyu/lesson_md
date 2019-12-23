const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  // 低效
  res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
})
.listen(1234, () => {
  console.log('listened 1234');
})