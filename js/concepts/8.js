// 定义构建函数
let Car = function() {}
let benz = new Car()
// benz 为实例对象, constructor为构造函数
benz instanceof Car  // true
// instanceof 运算符 返回 对象是否是类的实例?

const message = new String('xxx');
console.log(message instanceof String); // string 
console.log(typeof message, message, "xxx");
console.log('xxx' instanceof String);

// typeof 会返回一个运算数的基本类型，instanceof 返回的是布尔值
// instanceof 可以准确判断引用数据类型，但是不能正确判断原始数据类型
// typeof 虽然可以判断原始数据类型（null 除外），但是无法判断引用数据类型（function 除外）