// 投票算法 不断消除不同算法直到没有不同的元素，剩下的元素就是我们要找的元素
// 1. majority 的出现次数一定会超过n/2 
// 2. majority 在哪个位置呢？  假设从第一个开始
var majorityElement = function(nums) {
  let count = 1; //至少为1
  let majority = nums[0]; //假设第一个数是majority
  for(let i = 1; i < nums.length; i++) { //后面的每一个数
      if (count === 0) {
          majority = nums[i]; // 变成了那个数
      }
      if (nums[i] === majority) { // 如果相同
          count ++; //加一
      } else {
          count --; //减速一
      }
  }
  return majority;
}

// console.log(majorityElement([2,2,1,1,1,2,2]))