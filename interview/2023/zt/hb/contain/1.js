// 数组转Set去重。Set的size 和数组length相等，
// 无重复元素。不等，有重复元素
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};
console.log(containsDuplicate([1,3,4,2]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))