function singleNumber(nums) {
  let ret = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    ret = ret ^ element;
  }
  return ret;
}

console.log(1^0); //结合率
console.log(3^2); // 011 010  001
console.log(singleNumber([4,1,2,1,2]))