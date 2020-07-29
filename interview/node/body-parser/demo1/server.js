var http = require('http');

var parsePostBody = function (req, done) {
    var length = req.headers['content-length'] - 0;
    var arr = [];
    var chunks;

    req.on('data', buff => {
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        done(chunks);
    });
};

var server = http.createServer(function (req, res) {
    parsePostBody(req, (chunks) => {
        var body = chunks.toString();
        res.end(`Your nick is ${body}`)
    });
});

server.listen(3000);