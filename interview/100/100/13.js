// Writable
// var obj = {};

// Object.defineProperty(obj, 'a', {
//     configurable: true,
//     enumerable: false,
//      writable: false,
//     value: 1
// });

// Object.defineProperty(obj, 'a', {
//     configurable: false,
//     enumerable: true,
//     writable: false ,
//     value: 2
// });
// var d = Object.getOwnPropertyDescriptor(obj, 'a')

// console.log(obj.a);

var obj = {}

Object.defineProperty(obj, 'a', {
    configurable: true,
    enumerable: false,
    writable: false,
    value: 1
});
obj.a=2;
var d = Object.getOwnPropertyDescriptor(obj, 'a')

console.log(d);