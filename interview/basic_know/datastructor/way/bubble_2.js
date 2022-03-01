var bubbleSortFlag = function (arr) {
    console.time('冒泡排序耗时')
    for (var i = 0; i < arr.length; i++) {
        var flag = true // 设置每一轮是否进行了交换，默认未交换，即有序
        for (var j = 0; j < arr.length - i - 1; j++) {
            // 比较相邻两个元素，进行交换
            if (arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = false // 有元素交换，无序
            }
            // console.log(arr)
        }
        console.log(i, arr)
        if (flag) break;
    }
    console.timeEnd('冒泡排序耗时')
    return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27]
console.log(bubbleSortFlag(arr))