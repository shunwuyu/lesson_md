https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/submissions/385271883/
const twoSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b );
    // console.log(nums);
    let i = 0;
    let j = nums.length - 1
    while ( i < j ) {
        if (nums[i] + nums[j] == target) {
            return [i, j]
        } else if (nums[i] + nums[j] < target) {
            i++;
        } else {
            j--;
        }
    }
    return [-1, -1]
}

console.log(twoSum([3,2,4], 6));