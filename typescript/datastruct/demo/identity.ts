// function identity(arg: number): number {
//   return arg;
// }

// 传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

// function identity(arg: any): any {
//   return arg;
// }
// 给identity添加了类型变量T
function identity<T>(arg: T): T {
  return arg;
}

// let output = identity<string>("myString");
// 类型推导
let output = identity("myString"); 