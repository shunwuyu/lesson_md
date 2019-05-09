## js 中变量类型

基本类型：
- null  typeof
- undefined
- number
- string
- bool
引用类型
- Object
- Array   Object.prototype.toString.call()
- Function

基本类型：
- 值保存在栈中;
- 保存与复制的是值本身
  
引用类型：
- 值保存在堆中，值的引用保存在栈内存中
- 保存与复制的是指向对象的一个指针（引用类型的值是按引用访问的）

复制变量时候
```js

// 基本类型
var num1 = 5;
var num2 = num1;

// 引用类型
var obj1 = {};
var obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name); //"Nicholas"
```

传递参数
- 在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量
```js
// 参数num 与变量 count 互不相识 就像你和前女友在马路上遇到一样 互不相识
function addTen(num) {
 num += 10;
 return num;
}
var count = 20;
var result = addTen(count);
console.log(count); //20，没有变化
console.log(result); //30
```
- 向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部
  
```js
function setName(obj) {
 obj.name = "Nicholas";
}
var person = new Object();
setName(person);
alert(person.name); //"Nicholas"
```