// 给定 1->2->3->4, 你应该返回 2->1->4->3.
let arr = [1,2,3,4];

for (var i = 0; i < arr.length; i=i+2) {
  let tmp = arr[i];
  arr[i]  =  arr[i+1];
  arr[i+1] = tmp;
}

console.log(arr);