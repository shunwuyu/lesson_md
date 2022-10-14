let arr1 = [1,2,3,4];
let arr2 = arr1.slice(0);
let arr3 = arr1.concat();
arr2[1] = 6;
arr3[1] = 6;
console.log(arr1);
console.log(arr2);
console.log(arr3);
// 表面上看是深拷贝
