// 对于直接调用 foo 来说，
// 不管 foo 函数被放在了什么地方，
// this 一定是 window
function foo() {
    console.log(this.a)
}
var a = 1
foo()

const obj = {
    a: 2,
    foo: foo
}
// 对于 obj.foo() 来说，我们只需要记住，
// 谁调用了函数，
// 谁就是 this，所以在这个场景下 
// foo 函数中的 this 就是 obj 对象
obj.foo()
// 对于 new 的方式来说，
// this 被永远绑定在了 c 上面，
// 不会被任何方式改变 this
const c = new foo()