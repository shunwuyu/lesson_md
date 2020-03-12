// https://juejin.im/post/5c19c1b6e51d451d1e06c163


// 有一个类如下：
// function Person(name) {
//     this.name = name
// }
// let p = new Person('Tom');

// // 1. p.__proto__等于什么？
//     Person.prototype
// // 2. Person.__proto__等于什么？
//     Function.prototype

// // -----------------------实例的__proto__属性（原型）等于其构造函数的prototype属性。实例p的构造函数为Person，而Person的构造函数为Function


// // 触类旁通
//     var foo = {},
//         F = function(){};
//     Object.prototype.a = 'value a';
//     Function.prototype.b = 'value b';

//     console.log(foo.a)    //value a
//     console.log(foo.b)    //undefined
//     console.log(F.a)      //value a
//     console.log(F.b)      //value b

// //若将题干改为
//     function Person(name) {
//       this.name = name
//       return null
//     }
//     let o = new Person('Tom'); //实例化Person过程中，Person返回什么（或者p等于什么）？
//     console.log(o)
//     // {}
// //---------------------构造函数不需要显示的返回值。使用new来创建对象(调用构造函数)时,
// //如果return的是非对象(数字、字符串、布尔类型等)会忽而略返回值;如果return的是对象，
// //则返回该对象(注：若return null也会忽略返回值）。


// function Person (name) {
//   this.name = name;
// }

// function Student () {
  
// }

// Student.prototype = Person.prototype;
// Student.prototype.constructor = Student;

// let s = new Student('Tom');
// console.log(s instanceof Person); // 返回 true\



// // 下面代码输出什么？

// for(var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         // console.log(i)
//     }, 0)
// }
// // 10个10
// //若要输出从0到9， 将var改为let，或者使用闭包。
// // ......
// for(var i = 0; i < 10; i++) {
//   (function (i) {
//       setTimeout(() => {
//           // console.log(i)
//       }, 0);
//   })(i);
// }
// let 每次循环会生成一个封闭作用域和settimeout绑定， var是依次循环覆盖一次循环



//for...in迭代和for...of有什么区别？
Array.prototype.method=function(){
  console.log(this.length);
}
var myArray=[1,2,4,5,6,7]
myArray.name="数组"
// for (let index in myArray) {
//   // console.log(index)
//   console.log(myArray[index]);
// }
for (let index of myArray) {
  console.log(index)
}
// for in
// 1.index索引为字符串型数字，不能直接进行几何运算
// 2.遍历顺序有可能不是按照实际数组的内部顺序
// 3.使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性
// 所以for in更适合遍历对象

// for of
// for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。
// for of遍历的只是数组内的元素，而不包括数组的原型属性method和索引(键名)