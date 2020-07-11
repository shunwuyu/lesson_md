var arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);
// // 1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
// // 2、currentValue （数组中当前被处理的元素）
// // 3、index （当前元素在数组中的索引）
// // 4、array （调用 reduce 的数组）
// var sum = arr.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur, index);
//     return prev + cur;
// }, 0)
// console.log(arr, sum);

// function reduce(arr, reduceCallback, initialValue) {
//   // 首先，检查传递的参数是否正确。
//   if (!Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') 
//   {
//     return [];
//   } else {
//     // 如果没有将initialValue传递给该函数，我们将使用第一个数组项作为initialValue
//     let hasInitialValue = initialValue !== undefined;
//     let value = hasInitialValue ? initialValue : arr[0];

//     // 如果有传递 initialValue，则索引从 1 开始，否则从 0 开始
//     for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
//       value = reduceCallback(value, arr[i], i, arr); 
//     }
//     return value;
//   }
// }