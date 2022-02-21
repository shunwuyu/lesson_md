/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function (nums, k) {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
      console.log(nums);
      const mid = partition(nums, low, high)
      console.log(nums , low, mid, high)
    //   console.log(mid, '-----');
        if (mid === k - 1) {  
            // console.log(nums);
            return nums[mid] 
        }
      mid < k - 1 ? low = mid + 1 : high = mid - 1
    }
    // console.log(nums);
  }
//   基准点在的位置 从大到小
  function partition(arr, low, high) {
    let mid = Math.floor(low + (high - low) / 2) // 中间 作为基准
    const pivot = arr[mid]; // 这里记得添加分号 
    // 把pivot放在arr的最后面  等下他放在中间
    [arr[mid], arr[high]] = [arr[high], arr[mid]]
    let i = low
    // 把pivot排除在外,不对pivot进行排序
    let j = high - 1
    while (i <= j) {
      while (arr[i] > pivot) i++  // 大于pivot  i+1  
      while (arr[j] < pivot) j-- // 少于pivot j-- 
    //   console.log(i, j)
    //   return;
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++; j--;
      }
    }

    // console.log(pivot, i, j, arr, '/////');
    
   
    // 因为arr[i]是属于left的,pivot也是属于left的
    // 故我们可以把原本保护起来的pivot和现在数组的中间值交换
    [arr[high], arr[i]] = [arr[i], arr[high]]
    // console.log(pivot, arr);
    
    return i
  }
  

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))