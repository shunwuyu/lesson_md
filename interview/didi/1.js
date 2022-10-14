// 不足 无法监听 属性的add与delete
let obj = {a: '1', b: { c: 2 }, d: [1, 2, 3]}
Object.defineProperty(obj, 'a', {
  enumerable: true,
  configurable: true,
  get: function reactiveGetter() {
    console.log('get value')
    return val
  },
  set: function reactiveSetter(newVal) {
    console.log('change value')
    val = newVal
  }
})

//方案一 不足 无法监听 属性的add与delete
obj.b.c = 211;
// 数组有问题
obj.d.push(4);

