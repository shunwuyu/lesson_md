// 先输出1， 再输出undefined
// 因为 console.log() 方法在完成输出后会返回 
// undefined，而 typeof 操作符返回的是其后面
// 接的表达式或值的数据类型，因此输出结果是 "undefined"。
console.log(typeof console.log(1));