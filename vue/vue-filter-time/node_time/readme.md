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
