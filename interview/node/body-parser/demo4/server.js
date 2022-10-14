var http = require('http');
var contentType = require('content-type');
var iconv = require('iconv-lite');

var parsePostBody = function (req, done) {
    var obj = contentType.parse(req.headers['content-type']);
    var charset = obj.parameters.charset;  // 编码判断：这里获取到的值是 'gbk'

    var arr = [];
    var chunks;

    req.on('data', buff => {
        arr.push(buff);
    });

    req.on('end', () => {
        chunks = Buffer.concat(arr);
        var body = iconv.decode(chunks, charset);  // 解码操作
        done(body);
    });
};

var server = http.createServer(function (req, res) {
    parsePostBody(req, (body) => {
        res.end(`Your nick is ${body}`)
    });
});

server.listen(3000);