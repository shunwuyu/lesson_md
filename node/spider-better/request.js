const request = require('request');

request('http://www.dytt8.net/index.html', (err, res) => {
  console.log(err);
  console.log(res);
})