var containsDuplicate = function(nums) {
    // 将数组做升序排列
    nums.sort((a, b) => a - b);
    // 数组的长度
    const n = nums.length;
    // 循环遍历数组 因为下面需要有 i+1的操作，所以这里n-1是取不到的。
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))