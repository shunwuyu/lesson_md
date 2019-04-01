## Set
- ES6 提供 新的数据结构 - Set 类似数组 
- 构造函数 用于生成 set 数据结构
- add 添加 表明不会重复 返回 set 结构本身
- delete 删除某个值 bool
- has 是否是set成员 bool
- clear 清除 无返回值

遍历操作
- keys() 键名遍历器 返回键名遍历器
- values() 键值遍历器
- entries() 键值对遍历器
- forEach 遍历

## Map
js 对象 只能用字符串作为键
类似对象， 也是键值对集合，但是键的范围不限字符串，各种类型的值都可以作为键，

作为构造函数
接受一个数组， 数组成员是一个个表示键值的数组
- size
- get(key)
- set(k, v)
- has(k)
- delete(k)
- keys()
- values()
- entries()
- forEach()

## for of
- 借鉴了 python java
- 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环
- 可迭代对象(部署了Iterator接口)
  意思是这个对象（或者它原型链 prototype chain 上的某个对象）必须有一个名字是 Symbol.iterator 的属性: [[Symbol.iterator]] 

## 原有 for in 

- 只能获取对象的键名 不能获取键值 

```js
var arr = [9, 8, 7];
for (let a in arr) {
  console.log(a) // 0, 1, 2
}
arr.foo = 'hello';
for (let a of arr) {
  console.log(a) // 9, 8, 7
}
// for of 循环不会返回foo 属性
```

## Array.from

- 以前类数组对象
- 加一个可迭代对象(部署了Iterator接口)
  意思是这个对象（或者它原型链 prototype chain 上的某个对象）必须有一个名字是 Symbol.iterator 的属性: [[Symbol.iterator]] 
