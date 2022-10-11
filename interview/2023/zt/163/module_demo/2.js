let data = require("./1.js")
let data2 = require("./1.js") // 我再次导入一次是不会生效的。
console.log(data, data2)