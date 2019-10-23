var findDisappearedNumbers = function(nums) {
  let allNums = []; //

  let res = []; //未出现数字的结果数组

  for (let i = 0; i < nums.length; i++) { // n  一次遍历
    allNums[nums[i] - 1] = true; // true 设计一次， 出现了
  }

  for (let i = 0; i < nums.length; i++) {
    if (!allNums[i]) { 
      res.push(i + 1); //没有值
    }
  }
  return res;
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))