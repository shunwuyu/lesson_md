// // ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值
// // 直接使用Symbol()创建新的symbol类型，并用一个可选的字符串作为其描述。
// var sym1 = Symbol();
// var sym2 = Symbol('foo');
// var sym3 = Symbol('foo');
// console.log(sym2 == sym3);
// console.log(sym3.toString()); // 描述的意义

// // 应用场景
// var mySymbol = Symbol();
// // var a = {};
// // a[mySymbol] = 'Hello!';
// // var a = { [mySymbol]: 'Hello!'};
// var a = {};
// Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// // Object.defineProperty(a, mySymbol, { value: 'world!' });
// console.log(a[mySymbol], '------');

// // 我们想区分两个属性，其实我们并不在意，这两个属性值究竟是什么，我们在意的是，这两个属性绝对要区分开来！
// // var shapeType = { triangle: 'Triangle', square: 'Square'};
// //我们不用非要去给变量赋一个字符串的值，去区分它和别的变量的值不同，因为去给每个变量取个语义化而又不同的值是一件伤脑子的事，当我们只需要知道每个变量的值都是百分百不同的即可，这时候我们就可以用Symbol
// const shapeType = {
//   triangle: Symbol(),
//   square: Symbol()
// };
// function getArea(shape, options) { 
//     var area = 0; 
//     switch (shape) { 
//       case shapeType.triangle:
//       area = .5 * options.width * options.height; 
//       break; 
//       case shapeType.square:
//       area =  options.width * options.height; 
//       break; 
//     } 
//     return area;
// }

// getArea(shapeType.triangle, { width: 100, height: 100 });



// // 1. Symbol 值通过 Symbol 函数生成，使用 typeof，结果为 "symbol"
// var s = Symbol();
// console.log(typeof s);

// // 2. Symbol 函数前不能使用 new 命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
// //new Symbol(); // 原始数据类型, 不是对象

// // 3. instanceof 的结果为 false
// // var s1 = Symbol('foo');
// // console.log(s instanceof Symbol); 

// // 5. 如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值。
// const obj = {
//   toString() {
//     return 'abc';
//   }
// };
// const sym = Symbol(obj); // 可以接受一个对象作为描述
// console.log(sym, sym.toString());

// // 6. Symbol 函数的参数只是表示对当前 Symbol 值的描述，相同参数的 Symbol 函数的返回值是不相等的。
// // 没有参数的情况
// var s1 = Symbol();
// var s2 = Symbol();

// console.log(s1 === s2); // false

// // 有参数的情况
// var s1 = Symbol('foo');
// var s2 = Symbol('foo');

// console.log(s1 === s2); // false

// // 7. Symbol 值不能与其他类型的值进行运算，会报错。
// var sym2 = Symbol('My symbol'); //  Cannot convert a Symbol value to a string
// // console.log("your symbol is " + sym);
// // 8. Symbol 值可以显式转为字符串。
// var sym3 = Symbol('My symbol');
// console.log(String(sym));
// console.log(sym.toString()); 

// 10. Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。
// var obj = {};
// var a = Symbol('a');
// var b = Symbol('b');

// obj[a] = 'Hello';
// obj[b] = 'World';
// obj.cc = 'cc';
// var objectSymbols = Object.getOwnPropertySymbols(obj);
// console.log(objectSymbols);
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(JSON.stringify(obj))

// 11. 如果我们希望使用同一个 Symbol 值，可以使用 Symbol.for。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
// var s1 = Symbol.for('foo');
// var s2 = Symbol.for('foo');
// console.log(s1 === s2);

// 12. Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"

var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2) );