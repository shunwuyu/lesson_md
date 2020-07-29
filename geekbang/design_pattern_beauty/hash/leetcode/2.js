// 空间换时间
var twoSum = function(nums, target){
  if ( !Array.isArray(nums) || Object.prototype.toString.call(target) !== "[object Number]" ) return;

  var arr = [],
      i,
      j,
      len = nums.length;

  for ( i = 0; i < len; i ++ ){
    arr[nums[i]] = i; 
    // arr 存着值 根据值找下标
  }

  for ( i = 0; i < len; i ++ ){
    j = arr[ target - nums[i] ];
    if ( j !== undefined && i !== j ) return [ i, j ];
  }
}