const http = require('http');
const url = require('url');
console.log('////')
const server = http.createServer((req, res) => {
    // console.log('-------------')
    // res.end('hello world')
    var query = url.parse(req.url, true).query;
    // console.log(query.callback)
    // res.end('console.log("hello world")');
    // res.end('')
    let data = {status:0}
    res.end(`${query.callback}(${JSON.stringify(data)})`)
});
server.listen(8888)