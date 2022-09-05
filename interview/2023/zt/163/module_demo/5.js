// CommonJs导入的值是拷贝的，所以可以修改拷贝值，
// 但这会引起变量污染，一不小心就重名。
let { num, add } = require("./4.js")
console.log(num) // 0
add()
console.log(num) // 0
num = 10