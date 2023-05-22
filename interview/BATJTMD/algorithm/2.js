function quickSelect(arr, k) {
    if (arr.length === 1) {
      return arr[0];
    }
    
    // 选择一个随机的枢轴元素
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    
    // 将数组分为小于和大于枢轴元素的两个子数组
    const smaller = arr.filter(num => num < pivot);
    const equal = arr.filter(num => num === pivot);
    const larger = arr.filter(num => num > pivot);
    
    if (k <= larger.length) {
      // 第K大的数在较大的子数组中
      return quickSelect(larger, k);
    } else if (k <= larger.length + equal.length) {
      // 第K大的数是枢轴元素
      return pivot;
    } else {
      // 第K大的数在较小的子数组中
      return quickSelect(smaller, k - larger.length - equal.length);
    }
  }