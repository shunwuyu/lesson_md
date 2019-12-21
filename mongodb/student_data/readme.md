- https://www.jb51.net/article/77517.htm
- 查出广东所有的学生
  db.smessage.aggregate({$match:{province:"guang dong"}}).pretty();
- db.smessage.aggregate( {$match: {province: "guang dong"}}, {$unwind: "$subject"}, {$group:{ _id: {province: "$province", subjectname: "$subject.name"}, per:{$avg:"$subject.score"}}}, {$sort:{per:1}} );
  $match 
  $group 分组 
- 水贴王
db.articles.aggregate({"$project" : {"author" : 1}},
... {"$group" : {"_id" : "$author", "count" : {"$sum" : 1}}},
... {"$sort" : {"count" : -1}},
... {"$limit" : 5}
... )

- https://www.runoob.com/mongodb/mongodb-aggregate.html

db.article.insert( {    title: 'NoSQL Overview',     description: 'No sql database is very fast',    by_user: 'runoob.com',    url: 'http://www.runoob.com',    tags: ['mongodb', 'database', 'NoSQL'],    likes: 10 } );

db.article.insert( {        title: 'MongoDB Overview',     description: 'MongoDB is no sql database',    by_user: 'runoob.com',    url: 'http://www.runoob.com',    tags: ['mongodb', 'database', 'NoSQL'],    likes: 100 });

db.article.insert( {     title: 'Neo4j Overview',     description: 'Neo4j is no sql database',    by_user: 'Neo4j',    url: 'http://www.neo4j.com',    tags: ['neo4j', 'database', 'NoSQL'],    likes: 750 } );

计算作者写了几篇文章
db.article.aggregate([ {$group: { _id: "$by_user", num_tutorial: {$sum: 1}}} ]);

- 