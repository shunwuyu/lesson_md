const bubbleSort = arr => {
  let tmp = 0; // 最后一次交换的位置
  let lastExchangeIndex = 0; // 无序数列的边界
  let sortBorder = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;
    for (let j = 0; j < sortBorder; j++) {
      if (arr[j] > arr[j+1]) {
        tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = tmp;
        isSorted = false;
        lastExchangeIndex = j;
      }
    }
    sortBorder = lastExchangeIndex;
    if (isSorted) {
      break;
    }
  }
  return arr;
}

const arr = [5,8,6,3,9,2,1,7];
console.log(bubbleSort(arr));