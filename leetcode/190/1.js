var rotate = function(nums, k) {
    for(let i=1;i<=k;i++){
       nums.unshift(nums[nums.length-i]); 
   }
   console.log(nums, nums.length-k, k,'////');
   nums.splice(nums.length-k,k)
};
const nums = [1,2,3,4,5,6,7]
rotate(nums, 3)
console.log(nums)