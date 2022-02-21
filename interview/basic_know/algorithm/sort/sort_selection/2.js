function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}

let array = [4, 5, 3, 2, 1]
for (let j = 0; j < array.length; j++) {
    let minIndex = j // 每次要安排好的位置， 冒泡是相邻， 这个是选择
    for (let i = j; i < array.length; i++) {
        if (array[minIndex] > array[i]) {
            minIndex = i
        }
    }
    if (minIndex !== j) {
        swap(array, j, minIndex)
    }
}

console.log(array)