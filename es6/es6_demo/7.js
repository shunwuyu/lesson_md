// Object.assign() 方法用于将所有可枚举属性的
// 值从一个或多个源对象source复制到目标对象
// const target = { a: 1, b: 2 }
// const source = { b: 4, c: 5 }

// const returnedTarget = Object.assign(target, source)
// console.log(returnedTarget)

// Object.create()方法创建一个新对象，
// 使用现有的对象来提供新创建的对象的__proto__
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person); 
me.name = "Matthew"; 
me.isHuman = true; 
me.printIntroduction();
console.log(me.__proto__);


var a = Object.create(null);
console.dir(a);
console.log(a.__proto__); 
console.log(a.__proto__ === Object.prototype);
// 没有继承`Object.prototype`上的任何属性和方法，
// 所以原型链上不会出现Object
console.log(a instanceof Object); 