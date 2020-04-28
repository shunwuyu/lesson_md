// https://www.jianshu.com/p/60ca27e185ec
// function foo() {
//   var a = 'iceman';
//   console.log(a); // 输出"iceman"
// }
// foo();


var b = 'programmer';
function foo() {
    console.log(b); // 输出"programmer"
}
foo();
// 在赋值操作的左侧和右侧
console.log(name); //编译阶段 输出变量的值的时候的查找类型是RHS
var name = 'iceman';  // 运行时 变量为其赋值的查找类型是LHS

