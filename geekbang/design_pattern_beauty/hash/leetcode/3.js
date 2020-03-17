var twoSum = function(nums, target){
  if ( !Array.isArray(nums) || Object.prototype.toString.call(target) !== "[object Number]" ) return;

  var arr = [],
      i,
      j,
      len = nums.length;

  for ( i = 0; i < len; i ++ ){
    j = arr[ target - nums[i] ];
    if ( j !== undefined  ) return [  j, i ]; 
    arr[nums[i]] = i; // arr 会是值 下标
  }
}

console.log(twoSum([2, 7, 11, 15], 9))