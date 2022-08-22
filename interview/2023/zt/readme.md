let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 4, 6, 7, 8];
ES6合并两个数组并去重
let arr3 = Array.from(new Set([...arr1, ...arr2]));

es6 也叫 ECMAScript 6 JavaScript使用的标准  2009-11 至 2015-6   特性比较大
目的： js 适合大型项目开发， 企业级语言

1. 类
    让JavaScript的面向对象编程变得更加简单和易于理解
2. 模块化
    ES5不支持原生的模块化，在ES6中模块作为重要的组成部分被添加进来
    由 export 和 import 组成。每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 export 来规定模块对外暴露的接口，通过import来引用其它模块提供的接口。同时还为模块创造了命名空间，防止函数的命名冲突。
        导出
            ES6允许在一个模块中使用export来导出多个变量或函数
            export var name = 'Rainbow'

            //test.js
            var name = 'Rainbow';
            var age = '24';
            export {name, age};
            export function myModule(someArg) {
                return someArg;
            }  
        导入(import)
            一条import 语句可以同时导入默认函数和其它变量。import defaultMethod, { otherMethod } from 'xxx.js';
3. 箭头（Arrow）函数
    最令人激动的特性之一
    不只是关键字function的简写，它还带来了其它好处
    
4. 函数参数默认值
    ES6支持在定义函数的时候为其设置默认值：

5. 模板字符串
    ES6支持模板字符串，使得字符串的拼接更加的简洁、直观。

6. .解构赋值
    是JavaScript的一种表达式，可以方便的从数组或者对象中快速提取值赋给定义的变量

7.延展操作符
    Spread operator
    可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造对象时, 将对象表达式按key-value的方式展开。
    在函数调用时使用延展操作符

8.对象属性简写
    const name='Ming',age='18',city='Shanghai';
  
    const student = {
        name,
        age,
        city
    };
    console.log(student)
9. Promise
    Promise 是异步编程的一种解决方案，比传统的解决方案callback更加的优雅。
10. 支持let与const
    const与let都是块级作用域
    {
  let a = 10;
}

console.log(a);
11. 数组新增的方法
    find findIndex some every 
    match filter reduce 
12. 新的数据结构 Map Set 
