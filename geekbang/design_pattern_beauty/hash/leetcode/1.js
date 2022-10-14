var twoSum = function(nums, target){
  if ( !Array.isArray(nums) || Object.prototype.toString.call(target) !== "[object Number]" ) return;

  var i,
      j,
      len = nums.length;

  for ( i = 0; i < len; i ++ ){
    for ( j = i + 1; j < len; j ++ ){
      if ( nums[i] + nums[j] === target ) return [i, j];
    }
  }
}
// O(n2)
console.log(twoSum([2, 7, 11, 15], 9));