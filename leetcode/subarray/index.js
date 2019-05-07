/**
 * 
 * @param {number} s 
 * @param {number[]} nums
 * @return {number} 
 */
var minSubArrayLen = function(s, nums) {
  var len = nums.length,
    left = 0,
    right = 0, 
    sum = 0,
    result = Number.MAX_VALUE;
  if (len === 0) {
    return 0;
  }

  sum += nums[left];

  while(right < len) {
    while(sum < s && right < len) {
      right++;
      sum += nums[right];
    }
    while(sum >= s) {
      result = Math.min(result , right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  if (result === Number.MAX_VALUE) {
    return 0;
  }

  return result;
} 

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));