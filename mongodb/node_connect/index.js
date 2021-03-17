var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://124.71.174.51:27017/runoob";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});