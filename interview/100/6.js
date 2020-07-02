// 使用Set 极大地改善运行时间
let arr = [], set = new Set(), n = 1000000;

for (let i = 0; i < n; i++) {
  arr.push(i);
  set.add(i);
}

// 我们搜索数字123123

let result;
console.time('Array'); 
result = arr.indexOf(123123) !== -1; 
console.timeEnd('Array'); //0.450ms
console.time('Set'); 
result = set.has(123123); 
console.timeEnd('Set'); // 0.031ms

console.time('Array'); 
arr.push(n);
console.timeEnd('Array');
console.time('Set'); 
set.add(n);
console.timeEnd('Set');

const deleteFromArr = (arr, item) => {
  let index = arr.indexOf(item);
  return index !== -1 && arr.splice(index, 1);
};

console.time('Array'); 
deleteFromArr(arr, n);
console.timeEnd('Array');
console.time('Set'); 
set.delete(n);
console.timeEnd('Set');
