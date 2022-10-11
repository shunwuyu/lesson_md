import { reactive } from './reactive'
import { effect } from './effect'
// const ret = reactive({num: 0});

let dummy
const counter = reactive({ num1: 1, num2: 2 })
// counter.num1
effect(() => {
  dummy = counter.num1 + counter.num2
  console.log(dummy, '/////')// 每次counter.num1修改都会打印日志
}, )
setInterval(()=>{
  counter.num1++
  counter.num2++
},1000)
// ret.num;
// const obj = reactive({ count: 1 })
// effect(() => { 
//     console.log(obj.count)
// })

// console.log(obj)