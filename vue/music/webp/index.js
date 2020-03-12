// var pngquant = require('node-pngquant-native');
var pngquant = require('node-pngquant-native');
 
fs.readFile('./in.png', function (err, buffer) {
  if (err) throw err;
  var resBuffer = pngquant.compress(buffer, {
    "speed": 1 //1 ~ 11
  });
 
  fs.writeFile('./out.png', resBuffer, {
      flags: 'wb'
  }, function(err){});
});