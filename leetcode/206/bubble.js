function swap(arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}
//从小到大排序
function bubbleSort(arr) {
  // 每次遍历一个元素
  for (let i = arr.length - 1; i > 0; i--) {
    // 跟后面的元素比较
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}


const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(bubbleSort(arr));
