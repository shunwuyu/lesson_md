function dualPivotQuickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const [pivot1, pivot2] = getPivots(arr);
    const [left, mid, right] = partition(arr, pivot1, pivot2);
    
    return [...dualPivotQuickSort(left), ...mid, ...dualPivotQuickSort(right)];
  }
  
  function getPivots(arr) {
    const len = arr.length;
    const index1 = Math.floor(Math.random() * len);
    let index2 = Math.floor(Math.random() * len);
    while (index2 === index1) {
      index2 = Math.floor(Math.random() * len);
    }
    
    const pivot1 = Math.min(arr[index1], arr[index2]);
    const pivot2 = Math.max(arr[index1], arr[index2]);
    
    return [pivot1, pivot2];
  }
  
  function partition(arr, pivot1, pivot2) {
    const left = [];
    const mid = [];
    const right = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot1) {
        left.push(arr[i]);
      } else if (arr[i] >= pivot1 && arr[i] <= pivot2) {
        mid.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    
    return [left, mid, right];
  }