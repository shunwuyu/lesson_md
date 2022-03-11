var len;

function buildMaxHeap(arr) {
  len = arr.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    // console.log(i);
    heapify(arr, i);
  }
  return arr
}

function heapify(arr, i) {
  console.log(i);
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;
  // 有左节点，
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  // 有右节点
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  // 如果要换
  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }

}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [8,9,1,7,2,3,5,4,6,0]
console.log(buildMaxHeap(arr));