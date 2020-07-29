// 函数的返回结果只依赖于它的参数
```js
const a = 1
const foo = (x, b) => x + b
foo(1, 2) // => 3
```
// 稍微那么不纯
```js
const a = 1
const foo = (b) => a + b
foo(2) 
// => 3
```
// 函数执行过程没有副作用
// ok
```js
const a = 1
const foo = (obj, b) => {
  return obj.x + b
}
const counter = { x: 1 }
foo(counter, 2) // => 3
counter.x // => 1
```
```js
// error
const a = 1
const foo = (obj, b) => {
  obj.x = 2
  return obj.x + b
}
const counter = { x: 1 }
foo(counter, 2) // => 4
counter.x // => 2
```

// 纯函数很严格，也就是说你几乎除了计算数据以外什么都不能干，
// 计算的时候还不能依赖除了函数参数以外的数据。