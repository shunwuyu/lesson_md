var a = 10
function foo(){
    console.log(a)
}

function sum() {
    var a = 20
    foo()
}
// 函数 foo() 是在全局下创建的，所以 a 的上级作用域就是 window，输出就是 10
sum()