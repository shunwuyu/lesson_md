// 相同点: 
// - 都能声明对象
// - 都能通过extends进行扩展

// 通过interface声明对象结构
// interface A {
//   a: string;
// }
// // interface扩展另一个interface
// interface AA extends A {
//   b: number;
// }

// 通过type声明对象结构
// type B = {
//   a: string;
// };
// type扩展另一个type
// type BB = B & { b: number };
// 甚至更神奇的是type和interface还能相互继承。。。
// type B = {
//   a: string;
// };
// interface C extends B {
//   b: number;
// }

// 不同点
// type能够声明别名而interface不行
// interface拥有声明合并的特性而type没有
// type isNumberOrBool = number | boolean;
// let a: isNumberOrBool = 1;
// a = true

// 如果我们尝试两次声明同一个名称的接口，
// 他们不但不会冲突，反而还会合并
// interface Bar {
//   a: string
//   b: number
// }
// interface Bar {
//   c: string
// }
 /*
 实际的Bar 接口为 {
  a: string
  b: number
  c: string 
 }
 */

 