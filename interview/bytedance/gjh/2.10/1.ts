// 都是定义了一个有a属性的对象结构。
// interface Foo {
//   a: string
// }

// type Foo {
//   a: string
// }

// 函数类型其实由两个部分构成，参数类型和返回值类型。

// interface Foo {
//   (a: string): string
// }

// type Foo = (a: string) => string

// 混合类型

// type Counter = {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }
// 也可以使用type实现 ：
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = (function (start: number) { })  as Counter;
//   counter.interval = 123;
//   counter.reset = function () { };
//   return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
// // string、boolean、object、symbol、null、undefined、void、never、unknown、any
// // (1) 类型别称
// type ObjectAlias  = object

// interface Foo {
//   a: string
// }
// interface FooAlias extends Foo {}

// interface Foo {
//   a: string
// }
// interface Bar extends Foo {
//   b: number
// }

// interface Foo {
//   a: string
// }
// type Bar = Foo & {
//   b: number
// }

// (2) 扩展类（extends class）
// class Control {
//   private state: any;
// }

// interface SelectableControl extends Control {
//   select(): void;
// }