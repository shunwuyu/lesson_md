var arr=[1,2,3,4];
// var index=arr.indexOf(3);
// console.log(index);
// true false
// if(arr.includes(3))
//     console.log("存在");
// else
//     console.log("不存在");
// 返回数组中满足条件的第一个元素的值，如果没有，返回undefined
// var result = arr.find(item =>{
//     return item > 3
// });
// console.log(result);
// 返回数组中满足条件的第一个元素的下标，如果没有找到，返回-1]
var result = arr.findIndex(item =>{
    return item > 3
});
console.log(result);
