function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  
  //不使用延展操作符
  console.log(sum.apply(null, numbers));
  
  //使用延展操作符
  console.log(sum(...numbers));
  

  构造数组
  const stuendts = ['Jine','Tom']; 
const persons = ['Tony',... stuendts,'Aaron','Anna'];

数组拷贝
var arr = [1, 2, 3];
var arr2 = [...arr]; // ?等同于 arr.slice()
arr2.push(4); 
console.log(arr2)//[1, 2, 3, 4]

展开语法和 Object.assign() 行为一致, 执行的都是浅拷贝

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];// 将 arr2 中所有元素附加到 arr1 后面并返回
//等同于
var arr4 = arr1.concat(arr2);

在ECMAScript 2018中延展操作符增加了对对象的支持

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: "baz", x: 42, y: 13 }

在React中的应用
const params = {
	name: 'Jine',
	age: 21
}
<CustomComponent {...params} />

var params = {
	name: '123',
	title: '456',
	type: 'aaa'
}

var { type, ...other } = params;

<CustomComponent type='normal' number={2} {...other} />
//等同于
<CustomComponent type='normal' number={2} name='123' title='456' />

