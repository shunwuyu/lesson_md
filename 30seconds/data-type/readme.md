[source](https://juejin.im/post/5c91579b6fb9a0710f47e06c)

基本数据类型，
Number, String, Boolean, Null, Undefined, Symbol
引用数据类型
Object Array Function 

const isNumber = val => typeof val === 'number' && val === val

null是一个对象， 表示无值
undefined   是一个特殊属性 其值是未定义， 表示缺少值

Symbol 表示独一无二， 

PlainObject  字面量对象，  new 对象
Object.constructor  Null和Undefined会返回一个空对象， 会返回给的对象

不支持Array  嗅探