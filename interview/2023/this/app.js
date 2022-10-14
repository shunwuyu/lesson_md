// 函数调用栈，作用域链，变量对象，闭包，
// this等关键信息的变化
var fn;
function foo() {
    var a = 2;
    function baz() {
        console.log(a);
    }
    fn = baz; // baz分配给全局变量 
}
function bar() {
    fn();
}
foo();
bar();