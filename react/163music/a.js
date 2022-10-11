// reduce 接收 2 个参数： 第一个参数是回调函数（必选），第二个参数是初始值 initialValue（可选） 。
// 第一个参数（回调函数），接收下面四个参数：
// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)
// 贪吃蛇
// [1,2,3,4].reduce((acc, cur) => {
//   return acc + cur
// })
// [1,2,3,4].reduce((acc, cur) => {
//   return acc + cur
// }, 10)

// 如果没有提供 initialValue，reduce 会从索引 1 的地方开始执行 callback 方法，跳过第一个索引。如果提供 initialValue，从索引 0 开始。

// const testArr = [1,2,2,3,4,4,5,5,5,6,7]
// console.log(testArr.reduce((acc, cur) => {
//   if (!(acc.includes(cur))) {
//     acc.push(cur)
//   }
//   return acc
// }, []))

// 按属性给数组分类
// const bills = [
//   { type: 'shop', momey: 223 },
//   { type: 'study', momey: 341 },
//   { type: 'shop', momey: 821 },
//   { type: 'transfer', momey: 821 },
//   { type: 'study', momey: 821 }
// ];

// bills.reduce((acc, cur) => {
//   // 如果不存在这个键，则设置它赋值 [] 空数组
//   if (!acc[cur.type]) {
//     acc[cur.type] = [];
//   }
//   acc[cur.type].push(cur)
//   return acc
// }, {})

[1,2,3,4].reduce((acc, cur) => {
  console.log(acc, cur)
  return acc + cur
})