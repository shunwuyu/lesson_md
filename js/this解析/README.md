## 默认绑定
```js
function foo() {
  console.log(this.a);
}
var a = 123;
```
## 隐式绑定
函数调用有上下文的时候，
this绑定这个上下文对象。
```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo
}
obj.foo();
```
隐式绑定丢失
```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo
}
var b = obj.foo();
b()
```
## 显示绑定
call apply bind

## new 绑定
```js
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
```
创建一个对象
链接 prototype 链
绑定 构造函数 this  
如果没有返回对象 自动返回这个对象

## 优先级
new
call，apply
隐式
默认
