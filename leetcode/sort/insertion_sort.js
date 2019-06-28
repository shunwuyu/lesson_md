const insertionSort = (nums) => {
  // 第一个不用插
  for (let i = 1; i < nums.length; i++) { //外重排序
    let j = i - 1 // 前一个位置
    let tmp = nums[i] //当前位置
    while (j >= 0 && nums[j] > tmp) {
      nums[j + 1] = nums[j] //后退
      j-- //在前一个
    }
    // j就是小于tmp的
    nums[j+1] = tmp //位置
  }
  return nums
}

console.log(insertionSort([8,2,5,9,7]));