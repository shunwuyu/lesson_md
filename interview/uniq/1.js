function distinct(arr) {
  for (let i=0, len=arr.length; i<len; i++) {
      for (let j=i+1; j<len; j++) {
          if (arr[i] == arr[j]) {
              arr.splice(j, 1);
              // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
              len--;
              j--;
          }
      }
  }
  return arr;
}
