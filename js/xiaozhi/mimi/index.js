var obj = { name: "Tom", age: 34 };
//哑类型
//数组也是一种特殊的对象
var arr = [1,2,3,4,5];
console.log(typeof arr);

var a = function() { return false; }
console.log(obj);
console.log(arr);
console.log(a.toString());
console.log(typeof Object.prototype);
console.log(typeof Date.prototype);
console.log(typeof String.prototype);
console.log(Number.prototype);
console.log(Array.prototype);
console.log(Error.prototype);


