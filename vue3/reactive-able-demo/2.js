
let count = 1
// 计算过程封装成函数
let getDouble = n=>n*2 //箭头函数
let double = getDouble(count)
console.log(double)

count = 2
// 重新计算double，这里我们不能自动执行对double的计算
double = getDouble(count)
console.log(double)
// 如何让 double 的值得到自动计算。?