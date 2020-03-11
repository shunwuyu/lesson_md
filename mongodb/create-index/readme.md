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
db.users.find({tags:"cricket"}).explain()
db.users.getIndexes();