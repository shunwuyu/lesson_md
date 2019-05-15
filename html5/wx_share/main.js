const http = require('http');
const https = require('https');
const fs = require('fs');
const sha1 = require('sha1');

http.createServer(function (request, response) {
  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  https.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx6305f00be8619f3c&secret=a86ec395e27bace24ef59e6c09bd424d`, function(res) {
    // console.log(_res.access_token, '------');
    const datas = [];
    var size = 0;
    res.on('data', function(data) {
      datas.push(data);
      size += data.length;
    });
    res.on("end", function() {
      var buff = Buffer.concat(datas, size);
      var result = buff.toString();
      console.log(result, '-----------------');
      https.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + JSON.parse(result).access_token + '&type=jsapi', function(res) {
        var datas = [];
        var size = 0;
        res.on('data', function(data) {
          datas.push(data);
          size += data.length;
        })
        res.on('end', function() {
          var noncestr = sha1(new Date());
          
          var buff = Buffer.concat(datas, size);
          var rlt = buff.toString();
          var expires_in = rlt.expires_in;
          console.log(JSON.parse(rlt), '++++++++++');
          https.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=');
          // var config = sign(JSON.parse(rlt).ticket, url);
        })
      })
      response.writeHead(200, {'Content-Type': 'text/html'});
      let body = fs.readFileSync('./index.html')
      response.write(body);
      response.end();
    });
    
  })
  // 发送响应数据 "Hello World"
}).listen(8888);