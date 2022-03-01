let arr = []
for(let i = 0 ; i < 100000 ; i++){
    arr.push(parseInt(Math.random() * 100000))
}
console.log(arr);

function bubbleSort(arr) {
  var len = arr.length - 1;//循环次数
  for (var j = len; j > 0; j--) {
      //比较 交换
      for (var i = 0; i < j; i++) {
          if (arr[i] > arr[i + 1]) {
              var tamp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = tamp;
          }
      }
  }
  return arr;
}

let startTime = performance.now()
console.log(bubbleSort(arr))
let endTime = performance.now()

console.log(endTime - startTime)