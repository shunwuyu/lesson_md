function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      var tmp = arr[j];
      var order = tmp - element;
      if (order > 0) {
        arr[j + 1] = tmp; // 一直往后移
      } else {
        break; // 找到位置了， j
      }
    }
    arr[j+1] = element; //在这个位置插入
  }
  return arr;
}

var arr = [6, 5, 4, 3, 2, 1];
console.log(insertionSort(arr));
