// typeof 可以正确识别? 
// Undefined、Boolean、Number、String、Symbol、Function
// 但 对于其他的都会认为是 object  Null、Date
// 通过 typeof 来判断数据类型会不准确
// 但是可以使用 Object.prototype.toString 实现
function typeOf(obj) {
    // let res = Object.prototype.toString.call(obj).split(' ')[1]
    // // console.log(res)
    // res = res.substring(0, res.length - 1).toLowerCase()
    // return res
    // [object ]
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
console.log(typeOf('abc'))
console.log(typeOf({}))
console.log(typeOf(new Date))