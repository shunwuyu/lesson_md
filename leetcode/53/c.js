function maxSubArray(nums) {
  let thissum, maxsum, i;
  maxsum = thissum = 0;
  // maxsum thissum 保存
  // thissum 代表本场次最大， 0， 
  for (i = 0; i < nums.length; i++) {
    thissum += nums[i];
    // 如果都是大于0的数， 那更都新， 就完事了
    if (thissum > maxsum) { //是否要更新最大值， 
      maxsum = thissum;
    }
    // 如果都小于0, 给后面机会
    if (thissum < 0) {
      thissum = 0;
    }
  }
  return maxsum;
}


// console.log(maxSubArray([-2,-3,-1,-5]));