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

    sum += nums[left]; //初始化

    while(right < len) { // 退出条件 

      while(sum < s && right < len) { // 如果 没有到 ， right不能出界 
        right++; //走到 大于为止
        sum += nums[right]; // 更新sum
      }
      // 大于了7
      while(sum >= s) {
        // 如果 比之前的小， 就更新
        result = Math.min(result , right - left + 1);
        sum -= nums[left]; //减去左侧
        left++; //左边收，最小
      }
    }
    if (result === Number.MAX_VALUE) {
      return 0;
    }

    return result;
} 

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));