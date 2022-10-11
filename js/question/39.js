// var arr3 = [];

// // 遍历arr1
// for (var i = 0; i < arr1.length; i++) {
//   arr3.push(arr1[i]);
// }

// // 遍历arr2
// for (var j = 0; j < arr2.length; j++) {
//   arr3.push(arr2[j]);
// }

// console.log(arr3); // [1,2,3,4,5,6]
// var arr3 = arr1.concat(arr2);

// console.log(arr3); // [1,2,3,4,5,6
const arr1 = [1,2,3];
const arr2 = [4,5,6];
arr1.push(arr2);
// arr1.push.apply(arr1, arr2);
console.log(arr1);