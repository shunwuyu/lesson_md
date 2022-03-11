function quickSort(arr) {
  var len = arr.length;
  //结束递归的条件
  if (len <= 1) return arr;
  var left = [];
  var right = [];
  //中间基数
  var midindex = Math.floor(len / 2);
  var mid = arr[midindex];
  for (var i = 0; i < len; i++) {
      if (arr[i] == mid) continue;
      else if (arr[i] < mid) left.push(arr[i]);
      else right.push(arr[i]);
  }
  return quickSort(left).concat([mid], quickSort(right));
}

let arr = []
for(let i = 0 ; i < 100000 ; i++){
  arr.push(parseInt(Math.random() * 10000))
}

let startTime = performance.now()
quickSort(arr)
let endTime = performance.now()

console.log(endTime - startTime)