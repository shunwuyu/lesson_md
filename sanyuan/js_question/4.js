// 第十篇: JS中flat---数组扁平化
// 对于前端项目开发过程中，偶尔会出现层叠数据结构的数组，我们需要将多层级数组转化为一级数组
// :多维数组=>一维数组
let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]
let str = JSON.stringify(ary);

// ary = ary.flat(Infinity); // ES6中的flat方法
// console.log(ary);

// ary = str.replace(/(\[|\])/g, '').split(',')
// console.log(ary)

// str = str.replace(/(\[|\])/g, '');
// str = '[' + str + ']';
// ary = JSON.parse(str);
// console.log(ary);

// let result = [];
// let fn = function(ary) {
//   for(let i = 0; i < ary.length; i++) {
//     let item = ary[i];
//     if (Array.isArray(ary[i])){
//       fn(item);
//     } else {
//       result.push(item);
//     }
//   }
// }
// fn(ary)
// console.log(result);

// function flatten(ary) {
//     return ary.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
//     }, []);
// }

while (ary.some(Array.isArray)) {
    ary = [].concat(...ary);
}
console.log(ary);