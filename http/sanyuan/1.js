const http = require('http'); // ①

const server = http.createServer( // ②
    (req, res) => { // ③
        // res.setHeader('Set-Cookie', 'type=single'); // ④
        res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']); // ⑤
        res.end('set cookie finish!'); // ⑥
    });


server.listen(3000); // ⑦
console.log('listen on 3000 port'); // ⑧