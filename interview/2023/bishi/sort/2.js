// 如果要将一个较小的元素移动到前面，则需要进行多次比较与交换。我们可以使用希尔排序来改进插入排序。
// 该算法会先将元素分组，对每组进行插入排序，随后逐渐减少组的数量直到为1，最后再对整个数组进行插入排序。
// 避免插入排序中出现大量的交换操作，使时间复杂度达到最优。
// 直接插入排序算法
// https://juejin.cn/post/7166475010121400334
// 7 3 5 9 2 0 8 6

// 四个步骤
//     1. 间隔分组 通常为总长度的一半
//     2. 组内排序
//     3. 重新设置间隔分组   为前一次分组的一半
//     4. 插入排序

function shellSort(array) {
	let gap = array.length
	while(gap > 1) {
		gap = Math.floor(gap/2)
        // console.log(gap)
		for (let i = 1; i < array.length; i++) { // 第一个有序
			let item = array[i]
            // console.log(item)
			let j = i - gap 
			for ( ; j >= 0 && item < array[j]; j = j-gap) {
				array[j+gap] = array[j]
			}
			array[j+gap] = item
		}
	}
    return array;
}

console.log(shellSort([8, 9, 1, 7, 2, 3, 5, 4, 6, 0]))
