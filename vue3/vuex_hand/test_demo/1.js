// 响应式
// 一个最简单的响应式模型 我们可以通过 reactive 或者 ref 函数
// 把数据包裹成响应式对象，并且通过 effect 函数注册回调函数
// 然后在数据修改之后，响应式地通知 effect 去执行回调函数即可。
const { effect, reactive } = require('@vue/reactivity');
let dummy
const counter = reactive({ num1: 1, num2: 2 })
effect(() => {
    dummy = counter.num1 + counter.num2
    console.log(dummy)
})
setInterval(()=>{ counter.num1++},1000)