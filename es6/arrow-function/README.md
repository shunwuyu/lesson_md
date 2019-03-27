[source](https://juejin.im/post/5c76972af265da2dc4538b64)

## step

### 怎么用

- 省略
```js
var f = function(v) {
  return v;
}
```
只有一个参数的时候可以省略括号
```js
var f = v => {
  return v;
}
```
函数只有一条语句时可以省略{}和return
```js
var f = v => v;
// 花括号解析为 代码块
var f = () => ({name: '李雷'});
```

## arguments

- 对象是所有（非箭头）函数中都可用的局部变量
- 此对象包含传递给函数的每个参数，第一个参数在索引0处 第二个参数在 1 处
- 可以通过索引访问元素，并且拥有 length 属性；

## 注意

- 参数和箭头之间不能换行
- 返回对象时候
  
## 区别

### 箭头函数和普通函数区别

- 箭头函数不支持重命名函数参数,普通函数的函数参数支持重命名
  
```js
function func1(a, a) {
  console.log(a, arguments); // 2 [1,2]
}

var func2 = (a,a) => {
  console.log(a);
  // Duplicate parameter name not allowed in this context
};
func1(1, 2); func2(1, 2);
```
- 箭头函数 没有自己的this 他的 this 指向在定义的时候所处上下文this
- 箭头函数没有prototype(原型) a.prototype
- 箭头函数不能作为构造函数
- 不能直接修改箭头函数的this指向
- 箭头函数外层没有普通函数，它的this都会指向window
- 箭头函数 没有自己的arguments
如果箭头函数处于全局上下文的时候使用`arguments`会报错
箭头函数在一个普通函数内部,它的`arguments`继承于该普通函数