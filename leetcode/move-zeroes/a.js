// 空间复杂度降低为1。
// 在本身修改 0 就要去掉 抹掉
function moveZeroes(nums) {
  let index = 0; //游标
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== 0) {
      nums[index++] = num; //
    }
  }
  for(let i = index; i < nums.length; i++) {
    nums[index++] = 0;
  }
}

const nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);