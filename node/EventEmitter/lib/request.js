const req = require('request');

const request = (url) => new Promise((resolve, reject) => {
  console.log(unescape(url));
  req({
    url: unescape(url),
    json: true
  }, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    resolve(body)
  });
})
module.exports = request;