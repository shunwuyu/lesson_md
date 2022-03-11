let len;

function buildMaxHeap(arr) {
  // console.log(arr);
  len = arr.length; 
  for (let i = Math.floor(len/2); i >0; i--) {
    // console.log(i);
    heapify(arr, i)
  }
}

function heapify(arr, i) {
  let left = 2 * i,
    right = 2 * i + 1,
    largest =  i;
  
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest)
  }

}

function heapSort(arr) {
  buildMaxHeap(arr);
  // console.log(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 1, i);
    len--;
    heapify(arr, 1);
  }
  return arr
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [,4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.log(heapSort(arr));