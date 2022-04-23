// 直接字面量创建
var objA = {};
objA.name = 'a';
objA.sayName = function() {
    console.log(`My name is ${this.name} !`);
}

objA.sayName();
// 构造函数是 new Object()?
console.log(objA instanceof Object); 
console.log(objA.__proto__ === Object.prototype);  // 自动得到他上面的方法