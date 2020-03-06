[source](https://www.cnblogs.com/kaituorensheng/p/5155955.html)

Date()　　显示当前的时间
new Date　　构建一个格林尼治时间   可以看到正好和Date()相差8小时，我们是+8时区，也就是时差相差8，所以+8小时就是系统当前时间
ISODate()　　也是格林尼治时间


typeof Date()
typeof new Date()
ISODate("2020-03-05T02:59:59.475Z").valueOf()
ISODate("2020-03-05T02:59:59.475Z").toLocaleString()

db.tb1.insert({mydate: ISODate("20121102 07:58:51")})
db.tb1.insert({mydate: ISODate("20191102 07:58:51")})
db.tb1.find({time:{$gt:new Date(1363746981289)}})

db.orders.findOne({});  

orders 订单表
某个月的订单， 总金额 时间
1. dump.tar.gz 文件
26.3MB数据 
.tar.gz  linux 压缩文件
导入mongodb  复杂的运算 

tar -zxvf  dump.tar.gz linux 
dump/
dump/mock/   mock db
dump/mock/orders   colleciton
orders.metadata.json  
dump/mock/orders.bson  文档数据类型

bson 数据文件

120MB  所有订单的总销售额是多少？
 $gte $lt 指令 v-if v-for
 db
  .orders
  .findOne({
    orderDate:{
      $gte: ISODate("2019-01-01"), 
      $lt: ISODate("2019-02-01")
    }
  })

db.orders.findOne({orderDate:{$gte:ISODate("2019-01-01"), $lt: ISODate("2019-02-01")},status: 'created'});

所有订单的总金额
每一条记录都要  
大数据运算 mongodb 特别适合 图表工具
group by 

2019年 第一季度 已完成订单的订单总金额 和订单总数 
{orderDate:{$gte:ISODate("2019-01-01"), $lt: ISODate("2019-04-01")}   {status:'completed'}  $sum $total 

filter 过滤器 
aggregate 聚合查询 上一个条件的结果， 是下一个查询的输入

$match   where 
$group   group by 

第一季度的已完成订单
db.orders.aggregate([ { $match: {       status: "completed",     orderDate: {       $gte: ISODate("2019-01-01"),       $lt: ISODate("2019-04-01")     }   } }]);