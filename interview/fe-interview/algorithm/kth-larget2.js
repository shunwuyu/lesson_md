var findKthLargest = function(nums, k) {
    return nums.sort((a, b) => b - a)[k-1];    
}

console.log(findKthLargest([1, 4, 9, 10,2, 6], 2));