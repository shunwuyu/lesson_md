// - 也分排序区间和未排序区间
// 选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。
// 原地
// 最好, 最坏都是O(n^2)   不如冒泡和插入
// 稳定吗? 不 
// 选择排序每次都要找剩余未排序元素中的最小值，并和前面的元素交换位置，这样破坏了稳定性。
// 比如 5，8，5，2，9 略为逊色
const selectSort = (arr) =>  {
    const len = arr.length;
    let minIndex
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for  (let j = i; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

console.log(selectSort([8, 3, 5, 9, 2, 3, 0, 8]))