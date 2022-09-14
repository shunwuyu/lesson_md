var num = 42
var numObj = new Number(42)
console.log(typeof num)    // number
console.log(typeof numObj) // object
console.log(Object.prototype.toString.call(num))         // "[object Number]"
console.log(Object.prototype.toString.call(numObj))  // "[object Number]"
