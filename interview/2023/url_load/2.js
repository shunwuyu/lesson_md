// a = 1;
// b();
// function b() {
//     console.log('b');
// }
// var a;
// 变量声明  先undefined 再赋值
// 函数声明  优先级最高
// 形参，实参 
// es6中let有关的临时死区
// 变量提升到
function b() {
    console.log('b');
}
var a;
a = 1;
b();