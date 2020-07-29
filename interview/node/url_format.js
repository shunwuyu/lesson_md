var url = require('url');
const urlObj =  {
  protocol : 'http' ,
  auth : null ,
  host : 'example.com:8080' ,
  port : '8080' ,
  hostname : 'example.com' ,
  hash : null ,
  search : '?a=index&t=article&m=default',
  query : 'a=index&t=article&m=default',
  pathname : '/one',
  path : '/one?a=index&t=article&m=default',
  href : 'http://example.com:8080/one?a=index&t=article&m=default'
}
var a = url.format(urlObj);
console.log(a);