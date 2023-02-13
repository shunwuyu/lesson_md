const nums = [1,2,3,4,5,6,7]

var rotate = function(nums, k) {
    const len = nums.length;
    k = k % len;
    // console.log(k);
    reverse(nums, 0, len - 1);
    console.log(nums, '????');
    reverse(nums, 0, k - 1);
    console.log(nums, '///')
    reverse(nums, k, len - 1);
}

let reverse = function(nums, start, end) {
    while (start < end) {
        let tmp = nums[start];
        nums[start] = nums[end];
        nums[end] = tmp;
        start++;
        end--;
    }
}
 
rotate(nums, 3)
console.log(nums)