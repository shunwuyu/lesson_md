[source](https://leetcode-cn.com/problems/majority-element/)

大小为n 的数组， 找到其中的多数元素, 出现次数大于[n/2]的元素

1. 有几个元素？  只可能有1个

- 
  [3, 2, 3]  3
  [2,2,1,1,1,2,2]  2
Users,  id 
按喜好， 把用户查出来， 主要查询时   爱好网站
db.users.find({tags: 'coding'}).explain("executionStats");
"stage" : "COLLSCAN",   collectionScan  检索整个的collction
"totalDocsExamined" : 4, 
	"totalKeysExamined" : 0,  没有利用上任何一个索引

100万用户  查询就是慢下来？ 
为tags 集合建立一个索引
vuex mutations actions 
db.users.ensureIndex({"tags":1});
db.users.getIndexSpecs(); 
db.users.dropIndex("")