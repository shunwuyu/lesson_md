// https://juejin.cn/post/6844903985695080455
// var a = 1;
// a = 2;
// console.log(a)   // 2
// a = function(){};
// console.log(a) // function(){}
// 我们在用var或者函数声明的方式定义一个变量时，
// 这个变量的定义会提升到方法体的最顶端
// 函数声明和变量声明总是会被
// 解释器悄悄地被"提升"到方法体的最顶部。
// let，const定义变量的时候，并不会发生提升，
// 因为它存在局部（块）作用域的概念，会出现暂时性死区
console.log(c); // 
let c = 1;
console.log(a); // undefined 变量提升起到的作用
var a = 1;
console.log(b);// undefined
var b = function(){}; 