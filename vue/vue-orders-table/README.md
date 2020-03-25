1. loading
2. mock 基本

table 实现
3. scope  
4. :key

1. 讲下nextTick
2. 元素

计算前半年每个月的总订单数。

db.orders.aggregate([
    {
        // 步骤1：匹配条件
        $match: {
            status: {
                $ne: "cancelled"
            },
            orderDate: {
                $gte: ISODate("2019-01-01"),
                $lt: ISODate("2019-07-01")
            }
        }
    }, {
        // 步骤2：取出年月
        $project: {
            month: {
                $dateToString: {
                    date: "$orderDate",
                    format: "%G年%m月"
                }
            }
        }
    }, {
        // 步骤3：按年月分组汇总
        $group: {
            _id: "$month",
           
            count: {
                $sum: 1
            }
        }
    }
])


db.books.insert(
{
  "_id" : 1,
  title: "abc123",
  isbn: "0001122223334",
  author: { last: "zzz", first: "aaa" },
  copies: 5
}
)
db.books.aggregate( [ { $project : { title : 1 , author : 1 } } ] )
db.books.aggregate( [ { $project : { _id: 0, title : 1 , author : 1 } } ] )