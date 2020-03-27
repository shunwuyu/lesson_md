let fs = require('fs');

let path = require('path');
let https = require('https');
let url = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json'

https.get(url, function(res) {
  var html = ''
  res.setEncoding('utf-8');
  res.on('data', function(chunk) {
    html += chunk
  });
  res.on('end', function() {
    fs.writeFile('cities.json', html, {}, function(err) {
      if (err) {
        throw err;
      }
 
      console.log('over');
    })
  })
})