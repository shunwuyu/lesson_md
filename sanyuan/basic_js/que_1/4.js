//        基本数据类型        引用数据类型
// 储存的元素     值            地址 (指针)
// 储存的地点     栈            堆

// const a = []
// const b = a
// b.push(1)
// console.log(a);
// 第一步：p1 => 指向对象{name:'yck', age: 25}的指针 0001
// 第二步：test(p1) 传指针person.age = 26 修改该对象
// 第三步：代码继续执行 ，其中person为形参，
// 初始为p1(指向0001)。然后因为 const声明的 p1是常量，
// 不可以整体修改，所以函数内部person = {}
//  将在内存中新开辟一个空间存放形参，即另一个对象指针(0002)
// 第四步：return person 指针与函数头部 ，故而p2 为指向后者对象的指针
// ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71ebf5f8a9f34134a6147425548eb6f6~tplv-k3u1fbpfcp-watermark.image)
function test(person) {
  person.age = 26
  person = {  name: 'yyy',
              age: 30      }
  return person
}
const p1 = {    name: 'yck',
              age: 25      }
const p2 = test(p1)
console.log(p1) // ->  26 'yck'
console.log(p2) // 30 'yyyy'