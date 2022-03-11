// ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/26/1674dc7f6295471c~tplv-t2oaga2asx-watermark.awebp)
var len;

function buildMaxHeap(arr) {
  len = arr.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    // console.log(i);
    heapify(arr, i);
  }
}
function heapify(arr, i) {
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
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

function heapSort(arr) {
  buildMaxHeap(arr);
  for (var i = arr.length - 1; i > 0; i--) {
  //   console.log(len, '------------');
    swap(arr, 0, i); // 小的到最上面， 大的到最下面
    console.log(arr, '????')
    // len--;
    heapify(arr, 0)
  }
  return arr;
}
const arr = [8,9,1,7,2,3,5,4,6,0]
// buildMaxHeap(arr);
console.log(heapSort(arr));
