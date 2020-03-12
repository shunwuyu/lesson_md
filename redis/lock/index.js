var Redis = require("ioredis");
var redis = new Redis();

redis.set("foo", "bar");
redis.get("foo", function(err, result) {
  console.log(result);
});