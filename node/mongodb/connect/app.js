var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.31.128:27017/runoob";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  // 1 连接数据库
  // console.log("数据库已创建!");
  // db.close();
  // 2 创建集合
  // var dbase = db.db("runoob");
  // //相应自己的名字
  // dbase.createCollection('site', function (err, res) {
  //   if (err) throw err;
  //   console.log("创建集合!");
  //   db.close();
  // });
  // 3 插入数据
  // db.site.find() 找出来
  // var dbo = db.db("runoob");
  // var myobj = { name: "菜鸟教程", url: "www.runoob" };
  // dbo.collection("site").insertOne(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("文档插入成功");
  //     db.close();
  // });
  // 4 插入多条
  // var dbo = db.db("runoob");
  // var myobj =  [
  //     { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
  //     { name: 'Google', url: 'https://www.google.com', type: 'en'},
  //     { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
  //     ];
  // dbo.collection("site").insertMany(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("插入的文档数量为: " + res.insertedCount);
  //     db.close();
  // });
  // 5 插入多条
//   var dbo = db.db("runoob");
//   var whereStr = {"name":'菜鸟教程'};  // 查询条件
//   dbo.collection("site").find(whereStr).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//   });
//6 更新数据
  // var dbo = db.db("runoob");
  // var whereStr = {"name":'菜鸟教程'};
  // var updateStr = {$set: { "url" : "https://www.runoob.com" }};
  // dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
  //   if (err) throw err;
  //   console.log("文档更新成功");
  //   db.close();
  // });
  // 7 更新多条
  // var dbo = db.db("runoob");
  // var whereStr = {"type":'en'};  // 查询条件
  // var updateStr = {$set: { "url" : "https://www.runoob.com" }};
  // dbo.collection("site").updateMany(whereStr, updateStr, function(err, res) {
  //     if (err) throw err;
  //       console.log(res.result.nModified + " 条文档被更新");
  //     db.close();
  // });
  //8 删除一条数据
  // var dbo = db.db("runoob");
  // var whereStr = {"name":'菜鸟教程'};  // 查询条件
  // dbo.collection("site").deleteOne(whereStr, function(err, obj) {
  //     if (err) throw err;
  //     console.log("文档删除成功");
  //     db.close();
  // });
  // 9 排序
  // var dbo = db.db("runoob");
  // var mysort = { type: -1 };
  // dbo.collection("site").find().sort(mysort).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     db.close();
  // });
  // 10排序
  // var dbo = db.db("runoob");
  // dbo.collection("site").find().limit(2).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // })
  // dbo.collection("site").find().skip(2).limit(2).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });
  // 11 连接操作
  // 
  // var dbo = db.db("runoob");
  //   var whereStr = { type: "en" };  // 查询条件
  //   dbo.collection("site").deleteMany(whereStr, function(err, obj) {
  //       if (err) throw err;
  //       console.log(obj.result.n + " 条文档被删除");
  //       db.close();
  //   });

  // var dbo = db.db("runoob");
  // var myobj = { product_id: 154, status: 1 };
  // dbo.collection("orders").insertOne(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("文档插入成功");
  //     db.close();
  // });

  // var dbo = db.db("runoob");
  // var products = [
  //   {  name: '笔记本电脑' },
  //   {  name: '耳机' },
  //   {  name: '台式电脑' }
  // ];
  // dbo.collection("products").insertMany(products, function(err, res) {
  //     if (err) throw err;
  //     console.log("文档插入成功");
  //     db.close();
  // });

  var dbo = db.db("runoob");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',            // 右集合
         localField: 'product_id',    // 左集合 join 字段
         foreignField: '_id',         // 右集合 join 字段
         as: 'orderdetails'           // 新生成字段（类型array）
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });

});



