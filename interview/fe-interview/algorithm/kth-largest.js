// https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/
 // 未排序 K 大

var findKthLargest = function(nums, k) {
    const arr = quickSort(nums);
    return arr[arr.length - k];
}  

function quickSort(array, left, right) {
    var length =array.length;
        left =typeof left ==='number'? left :0,
        right =typeof right ==='number'? right : length-1;

    if (left < right) {
        var index = left -1;
        for (var i = left; i <= right; i++) {
            if (array[i] <= array[right]) {
                index++;
                var temp = array[index];
                array[index] = array[i];
                array[i] = temp;
            }
        }
        quickSort(array, left, index -1);
        quickSort(array, index +1, right);
    }
    return array;
}

console.log(findKthLargest([1, 4, 9, 10,2, 6], 3));