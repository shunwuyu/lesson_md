function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midVal = arr[mid];
  
      if (midVal === target) {
        return mid;
      } else if (midVal < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }