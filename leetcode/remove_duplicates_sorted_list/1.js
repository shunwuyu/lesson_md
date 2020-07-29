var removeDuplicates = function(nums) {
  const size = nums.length;
  let slowP = 0;
  for (let fastP = 0; fastP < size; fastP++) {
    if (nums[fastP] !== nums[slowP]) { // 每个位置要放不一样的数字
      slowP++;
      nums[slowP] = nums[fastP];
    }
  }
  return slowP + 1
}

console.log(removeDuplicates([1,1,2]));