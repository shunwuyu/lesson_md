const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
  res.writeHeader(200, {'Content-Type': 'application/pdf'})
  fs.createReadStream('./js.pdf').pipe(res);
}).listen(9999)