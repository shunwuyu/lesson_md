const fs = require('fs');
const zlib = require('zlib');
const { Console } = require('console');
const file = process.argv[2];
console.log(file);
fs.readFile(file, (err, buffer) => {
  zlib.gzip(buffer, (err, buffer) => {
    fs.writeFile(file + '.gz', buffer, err => {
      console.log('File successfully compressed');
    });
  });
});
