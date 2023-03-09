import {  ref } from './ref.js'
import { effect } from './effect.js'
const r = ref(0)
let val
effect(() => {
    val = r.value
})
console.log(val)
r.value++
console.log(val) // 1
