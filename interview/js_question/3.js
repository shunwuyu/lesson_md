// 类型转换通常在面试笔试中出现的比较多 https://juejin.im/post/5e34d19de51d4558864b1d1f4
// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/57
// javaScript是一种弱类型语言，变量不受类型限制，所以在特定情况下我们需要对类型进行转换。
// 显式类型转换 隐式类型转换 原始类型转换和对象类型转换
// 显式类型转换就是我们所说强制类型转换
// 隐士类型转化是不需要认为的强制类型转化，javaScript 自动将类型转化为需要的类型，所以称之为隐式类型转换。
// String(true)
// Boolean + Boolean   数字
// Boolean + Number 
// Object + Number valueOf
// Boolean([])
// Number('10a'); 
// var a = 1;
// 这题考察的应该是类型的隐式转换,考引用类型在比较运算符时候,
// 隐式转换会调用本类型toString或valueOf方法.
// var a = {
//   i: 1,
//   toString() {
//     return a.i++;
//   }
// }

// var a = {num:0};
// a.valueOf = function(){
//   return ++a.num
// }

// var a = [1,2,3];
// a.join = a.shift;
// if(a == 1 && a == 2 && a == 3) {
//   console.log('1');
// }
// Symbol.toPrimitive 是一个内置的 Symbol 值,它是作为对象的函数值属性存在的,当一个对象转换为对应的原始值时,会调用此函数。
// let a = {[Symbol.toPrimitive]: ((i) => () => ++i) (0)};
// if(a == 1 && a == 2 && a == 3) {
//   console.log('1');
// }

// let a = {
//   gn: (function* () {
//       yield 1;
//       yield 2;
//       yield 3;
//   })(),
//   valueOf() {
//       return this.gn.next().value;
//   }
// };

// if(a == 1 && a == 2 && a == 3) {
//   console.log('1');
// }

// window
// Object.defineProperty(window, 'a', {
//   get: function() {
//       return this.value += 1;
//   }
// });

// if(a == 1 && a == 2 && a == 3) {
//   console.log('1');
// }

// let a = [1,2,3];
// a.toString = a.shift;
// if( a == 1 && a == 2 && a == 3 ) {
//   console.log(1);
// }


// 答案解析 因为==会进行隐式类型转换 所以我们重写toString方法就可以了
// if(a == 1 && a == 2 && a == 3){
//  	console.log(1);
// }
// console.log(a);