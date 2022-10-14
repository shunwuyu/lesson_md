// typeof 是什么？ 操作符
// typeof 有什么用？ 一般被用于判断一个变量的类型
// typeof  返回值是什么？ 返回一个字符串
// 使用方法 如下 两种
console.log(typeof 1);
console.log(typeof(1));
console.log(typeof '1');
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof null);// object
// 以上基础类型， 以下为复杂
console.log(typeof []); // object
console.log(typeof {}); 
console.log(typeof console);  // object
console.log(typeof console.log); // function

// typeof null  
// JavaScript 存在的一个悠久 Bug, 不代表null 就是引用数据类型
// 并且null 本身也不是对象
// 所以，null 在 typeof 之后返回的是有问题的结果，不能作为判断null的方法
// 那怎么判断？  
let a = null;
console.log(a === null);

// 可以发现引用类型数据 用typeof来判断的话, 
//     除了function会被识别出来之外，其余的都输出object

// 如何判断一个变量是否纯在?
// if (isExist) { // 不能使用if(a)， 若a未声明，则报错
//     console.log('---------------------');
// }
console.log(typeof isExist)
if(typeof a != 'undefined'){
    //变量存在
}