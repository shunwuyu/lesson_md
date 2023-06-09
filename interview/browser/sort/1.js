// 递归法
// [1,2].concat(3, [4, 5])
function quickSort(arr) {
    if (arr.length <= 1) {
      // 当数组长度小于等于1时，直接返回该数组
      return arr;
    } else {
      // 选取第一个元素为基准数
      const pivot = arr[0];
      const left = [];
      const right = [];
  
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
  
      // 递归排序左右子序列，并将结果合并
      return quickSort(left).concat(pivot, quickSort(right));
    }
  }