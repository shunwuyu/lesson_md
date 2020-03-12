var findDisappearedNumbers = function(nums) {
  const res = []; //可以掏略
  let cur = 0;  // 没有值就入res
  for(let i = 0; i < nums.length; i++) {
    res[nums[i]] = true; //  为false的位置， 没出现的值是i+1
  }
  console.log(res);

  for(let i = 0; i < nums.length; i++) { 
    if (res[i + 1] === void 0) { 
        res[cur++] = i + 1;  //下一值
    }
  }
  // console.log(res);

  res.length = cur; //取长度
  return res;
}


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))