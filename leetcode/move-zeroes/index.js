// 空间复杂度， 多申请了两个数组 空间复杂度是O(n).
function moveZeroes(nums) {
  let notZeroArr = [],
    zeroArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroArr.push(0)
    } else {
      notZeroArr.push(nums[i])
    }
  }
  return notZeroArr.concat(zeroArr);
}

console.log(moveZeroes([0,1,0,3,12]));