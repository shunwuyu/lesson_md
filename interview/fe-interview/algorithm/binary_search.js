function binarySearch(arr, data) {
  var end = arr.length - 1,
      start = 0;

  while (start <= end) {
      var middle = Math.floor((start + end) / 2);
      if (arr[middle] > data) {
          end = middle - 1;
      } else if (arr[middle] < data) {
          start = middle + 1;
      } else {
          return middle;
      }
  }
  return -1;

}

var arr = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(arr, 2));