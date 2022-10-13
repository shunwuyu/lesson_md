var singleNumber = function(nums) {
    return nums.reduce((pre,cur) => pre ^ cur);
}
console.log(singleNumber([4,1,2,1,2]))