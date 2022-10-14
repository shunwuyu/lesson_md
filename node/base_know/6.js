// https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/dns.md
// DNS 是翻译官， 域名系统，它会将我们的域名转换为 IP 地址进行工作。
// https://juejin.cn/post/6844904008465776647
// var dns = require('dns');
// // 一是使用底层操作系统工具进行域名解析
// dns.lookup('www.qq.com', function(err, address){
//     if(err) throw err;
//     console.log('例子A: ' + address);
// });

// host 文件配置 C:\Windows\System32\drivers\etc

// 同一个域名可能对应多个IP
// var dns = require('dns');
// var options = {all: true};

// dns.lookup('www.qq.com', options, function(err, address){
//     if(err) throw err;
//     console.log('例子B: ' , address);
// });
// 浏览器 DNS 缓存 —> 系统（OS）缓存 -> 路由器缓存 -> ISP DNS 缓存，
const dns = require('dns');
// DNS 服务器以执行名称解析并始终使用网络执行 DNS 查询，
dns.resolve('www.nodejs.red', (err, records) => {
    console.log(records);
});