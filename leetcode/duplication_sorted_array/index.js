var removeDuplicates = function(nums) {
  var len = nums.length,
      cur,
      i, // original array's index
      j; // new array's index
  
  if (len === 0) {
      return 0;
  }
  
  cur = nums[0]; //当前元素 开始时这两个指针都指向第一个数字
  
  for (i = 1, j = 0; i < len; i++) {
      //如果两个指针指的数字相同，则快指针向前走一步
      if (nums[i] !== cur) { //如果不同，则两个指针都向前走一步
          j++; //慢指针向前走一步
          nums[j] = nums[i]; // 更新此位置
          cur = nums[i]; // 当前的是cur
      }
  }
  return j + 1;
};
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));