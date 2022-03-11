function shellSort(array) {
  if (array.length <= 1) return array; // 如果数组长度为1，直接返回
  var gap = Math.floor(array.length / 2);
  while (gap > 0) {
    for (var i = gap; i < array.length; i++) {
      console.log(i, '//////');
      var j = i; // 得到他的右边
      var temp = array[j];
      while (j > 0 && array[j - gap] > temp) { // 若array[j - gap]>temp(即array[j]) 则互换位置
        array[j] = array[j - gap]; // 这里可看成是将 j-gap 后移一个 gap 位 //TODO 插入排序这里是后移一位
        array[j - gap] = temp; // 由于不像插入排序那样需要比较很多个元素，而是两个数的比较，此处将大得值往前移一个 gap 位即可
        j -= gap; // 跳出循环的条件
      }
    }
    gap = Math.floor(gap / 2); // 减小增量
  }
  return array;
}

var array = [5,3,9,12,6,1,7,2,4,11,8,10];    
console.log(shellSort(array));
