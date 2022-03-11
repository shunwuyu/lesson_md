const url = 'http://guang.zxg/person?name=敖总&age=20'
console.log(encodeURIComponent(url));

const queryString = require('query-string');
console.log(
  queryString.stringify({
    name: '光',
    age: 20
  })
)
