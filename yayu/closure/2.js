// 函数的上级作用域在哪里创建创建的，上级作用域就是谁
var a = 10
function foo(){
    console.log(a)
}

function sum() {
    var a = 20
    foo()
}

sum()