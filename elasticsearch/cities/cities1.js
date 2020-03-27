let fs = require('fs');
// const fse = require("fs-extra");
let path = require('path');
let https = require('https');
let url = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json'

https.get(url, function(res) {
  
  res.setEncoding('utf-8');
  // let chunk = "";
  // let size = 0;
  res.on('data', function(chunk) {
    fs.appendFile('1.json', chunk, (err, ) => {
      if(err) {
        console.log(err);
      }
      console.log(chunk);
    });
  });
  res.on('end', function() {
    console.log('over')
  })
})