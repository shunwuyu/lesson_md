docker pull daocloud.io/library/mongo:2.7.6
docker run -p 27017:27017 --name mongo -d 18400f87db91  
docker restart mongo
docker exec -it mongo mongo
 
- use tutorial;
- db.users.insert({username: 'smith'});
- show collections;
- db.users.find();
- db.users.insert({username: "jones"});
- db.users.find({username:"jones"});
- db.users.find({
... _id: ObjectId("5df9817245306534b505aa5c")
... });
- db.users.find({ $and:[ {_id: ObjectId("5df9817245306534b505aa5c")}, {username: "jones"} ]});
- db.users.find({$or: [ {username:"smith"}, {username:"jones"} ]})
- db.users.update({username:"smith"}, {$set:{country:"Canada"}});
- db.users.update({username: "smith"}, {country:"Canada"});
- db.users.update({country:"Canada"}, {$set:{username: "smith"}});
- db.users.update({country: "Canada"}, {$unset:{country:1}});
- db.users.update({username: "smith"}, {   $set:{      favorites: {         cities:["Chicago", "Cheyenne"],         movies:["Casablanca", "For a Few Dollars More", "The String"]      }   } });
- db.users.find().pretty();
- db.users.find({"favorites.movies":"Casablanca"});
- db.users.update({"favorites.movies":"Casablanca"}, {$addToSet: {"favorites.movies": "The Maltese Falcon"}}, false, true);  false 表示不存在的不加入， true 是否多个更新
- db.foo.insert({value:1});
- db.foo.drop()
- for(i = 0; i < 20000; i++){ db.numbers.save({num:i}); }
- db.numbers.count();
- db.numbers.find({num: 500});
- db.numbers.find({num:{"$gt":19995}});
- db.numbers.find({num:{"$gt":20, "$lt":25}});
- db.numbers.find({num: {"$gt":19995}}).explain("executionStats");
- db.numbers.getIndexes();
- db.numbers.createIndex({num:1})

