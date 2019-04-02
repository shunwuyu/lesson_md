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
好处：
- forEach 不能 break 和 return；
- for-in 缺点更加明显，它不仅遍历数组中的元素，还会遍历自定义的属性，甚至原型链上的属性都被访问到。而且，遍历数组元素的顺序可能是随机的
- 跟 forEach 相比，可以正确响应 break, continue, return。
- for-of 循环不仅支持数组，还支持大多数类数组对象，例如 DOM nodelist 对象。
- for-of 循环也支持字符串遍历，它将字符串视为一系列 Unicode 字符来进行遍历。
- for-of 也支持 Map 和 Set （两者均为 ES6 中新增的类型）对象遍历。
- for-of循环不支持普通对象，但如果你想迭代一个对象的属性，你可以用
for-in 循环（这也是它的本职工作）

## Array.from

- 以前类数组对象
- 加一个可迭代对象(部署了Iterator接口)
  意思是这个对象（或者它原型链 prototype chain 上的某个对象）必须有一个名字是 Symbol.iterator 的属性: [[Symbol.iterator]] 
- 实现了 Iterator 接口的对象 （用...把有迭代器的对象 转为 数组）

