1. mongodb 更mysql 的本质区别是？
  - NOSQL   SQL 数据库三大范式
  - NOSQL doc 允许一定的存储冗余

  user_id  name orders  
  1. 展示订单 分页 element-ui PC后台  运营部门  老板
    总数 第一季度 单品最佳....  

  2. 用户来说 最多的查询是什么？    更大
    price -> products 推荐
    orders  我的订单  user_id name   不需要关联 user 表 

orders   orderLines total   便于查询  用户 
-  总销量
  total -> order  _id 
  $sum total 
  filter  |  linux  grep

  第一季度   每个州    销量最多的sku 的第一名 

  aggregate 应用场景
  - 第一季度 orderDate ISODate() $lt   $gt 2019 
  - 每个州 $state   分组的依据 $group   state 
  - 销量  orderLines.sku $group 分组 $sum   orderLines.qty
  - sku  第一名 orderby

  $match  ==  where
    有效订单  status: "completed"  
  state + sku  分组 
  每个订单中 
  $unwind   展开orderLines 展开 
  $group  分组   _id   $total  $orderLines.sku

