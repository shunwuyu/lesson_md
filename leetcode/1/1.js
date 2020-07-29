const twoSum = (nums, target) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr = [i, j];
        break;
      }
    }
  }
  return arr;
}

console.log(twoSum([2, 7, 11, 15], 9));