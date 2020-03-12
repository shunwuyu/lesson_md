const twoSum = (nums, target) => {
  let map = {};
  // let map = new Map();
  let res = [];
  nums.forEach((e, i) => map[e] = i);
  // nums.forEach((e, i) => map.set(e, i));
  console.log(map);
  for (let i = 0; i < nums.length; i++) {
    let j = map[target-nums[i]];
    // let j = map.get[target - nums[i]];
    if (j && j !== i) {
      res = [i, j];
      break;
    }
  }
  return res;
}

console.log(twoSum([2, 7, 11, 15], 9));