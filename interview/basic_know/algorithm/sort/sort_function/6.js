function insertSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
      var k = i;
      //前提： 1  前面必须有内容
      //前提： 2  当前这个元素，比左边小，交换1次
      while (k - 1 >= 0 && arr[k] < arr[k - 1]) {
          var temp = arr[k];
          arr[k] = arr[k - 1];
          arr[k - 1] = temp;
          k--;
      }
  }
  return arr;
}

let arr = []
for(let i = 0 ; i < 100000 ; i++){
  arr.push(parseInt(Math.random() * 10000))
}

let startTime = performance.now()
insertSort(arr)
let endTime = performance.now()

console.log(endTime - startTime)