// 将一个数组分为两个部分：有序部分和无序部分
// 每次从无序部分中取出一个元素，与有序部分中
// 的元素进行比较，找到合适的位置插入
// 适合场景  在数据集中只有少量的元素需要通过交换位置来移动
// 数据量不是很大或近乎有序的数据集来说  高效
function insertionSort(arr) {
    var len = arr.length;
    // 第一个是有序的
    for (var i = 1; i < len; i++) {
        var key = arr[i]; //将当前元素的值存储在key变量中
        var j = i - 1;
        while (j >= 0 && arr[j] > key) { //将比当前元素大的元素后移一位
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; //将当前元素插入合适的位置
    }
    return arr;
}