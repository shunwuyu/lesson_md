require('http').createServer((req, res) => {
    res.write('Hello World')
    res.end()
}).listen(3333, '127.0.0.1', () => {
})