function maxSubArray (nums){
  let thissum, i, j, k, maxsum;
  maxsum = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = i; j < nums.length; j++) {
      thissum = 0;
      for (k = i; k <= j; k++) {
        thissum += nums[k];
      } 
      if (thissum > maxsum) {
        maxsum = thissum;
      }
    }
  }
  return maxsum;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));