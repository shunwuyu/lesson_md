// === 和 == 的区别
// ==   ->  类型转换   
console.log(0 == 0)
console.log(0 == false)  // 类型转换  
console.log(0 === false) // 无类型转换
console.log(1 == "1") // true 类型转换
console.log(1 === "1" )
console.log(null == undefined)
console.log(null === undefined)
console.log({} == {}, {} === {}); // 浅比较