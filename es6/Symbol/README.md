## why 出现
对象属性名都是字符串，这容易造成属性名的冲突。
每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。
对象的属性名现在可以有两种类型，一种是原来就有的字符串，现在的 Symbol

## Symbol

- Symbol 值通过Symbol函数生成
Symbol函数的返回值是不相等的,永远不可能相等，

```js
let s = Symbol();
typeof s
```
虽然 第一个字母S大写,但是不能 new,
原因：一个原始类型的值，不是对象。

- Symbol函数可以接受一个字符串作为参数
  
表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

```js
let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```

Symbol函数的参数只是表示对当前 Symbol 值的描述,
因此相同参数的Symbol函数的返回值是不相等的。

```js
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```

- 在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

```js
let s = Symbol();
let obj = {
  [s]: function (arg) { ... }
};
obj[s](123);
// 如果s不放在方括号中，该属性的键名就是字符串s，而不是s所代表的那个 Symbol 值。
```

- Symbol 作为属性名，
该属性不会出现在for...in, Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。

Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
```js
Object.getOwnPropertySymbols()
```

## Symbol.for()，Symbol.keyFor()
搭配
- Symbol.for() 有时，我们希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值

- Symbol.keyFor 方法返回一个 Symbol 的 名称
