var maxSubArray = function(nums) {
  var max = -Number.MAX_VALUE;
  var sum = 0;
  for (let num of nums) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num;
    max = Math.max(max, sum);
  }
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));