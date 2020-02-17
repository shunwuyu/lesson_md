const fs = require('fs');
var request = require("request");
var options = {
    url:'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json'
    // url: 'https://api.some-server.com/',
    // agentOptions: {
    //     cert: fs.readFileSync(certFile),
    //     key: fs.readFileSync(keyFile),
    //     passphrase: 'password',
    //     securityOptions: 'SSL_OP_NO_SSLv3'
    // }
};

request.get(options, function(err, response, body){
  console.log(err, response, body);
  fs.writeFile('graph.json', response, 'utf8', function(){
    // 保存完成后的回调函数
    console.log("保存完成");
  });
});

