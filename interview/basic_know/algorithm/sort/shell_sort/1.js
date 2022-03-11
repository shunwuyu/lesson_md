function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
  
  while (gap < len / 3) {
    gap = gap * 3 + 1
  }
  // console.log(gap);
  for (gap; gap > 0; gap = Math.floor(gap/3)) {
    for (var i = gap; i < len; i++) {
      // console.log(i, gap, '-------') // 
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = temp;
    }
  }
  return arr
}

console.log(shellSort([8,9,1,7,2,3,5,4,6,0]));