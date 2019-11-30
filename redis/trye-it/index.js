const redis = require('redis');
const client = redis.createClient( 6379, '192.168.31.128');

// client.set('hello', 5, function(err, obj) {
//   console.log(obj);
// })
// client.incr('hello', function(err,data) {
//   console.log(data);
// })
client.get('hello', function(err, data) {
  console.log(data);
})