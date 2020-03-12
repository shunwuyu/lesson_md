[source](https://www.runoob.com/mongodb/mongodb-advanced-indexing.html)

1. db.users.insert({
   "address": {
      "city": "Los Angeles",
      "state": "California",
      "pincode": "123"
   },
   "tags": [
      "music",
      "cricket",
      "blogs"
   ],
   "name": "Tom Benzamin"
})

db.users.ensureIndex({"tags":1})
db.users.find({tags:"cricket"})
<!-- db.users.find({tags:"cricket"}).explain() -->
db.users.getIndexes();

db.users.find({tags: 'coding'}).explain("executionStats");

[source](https://www.cnblogs.com/huangxincheng/p/5737222.html)

hint 强制使用某个索引