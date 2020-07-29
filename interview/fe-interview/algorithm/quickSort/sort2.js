// 分治
// 建基于多项分支递归的一种很重要的算法范式 分而治之， 一个复杂问题 两个或多个相似的子问题直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。
function quickSort(array, left, right) {
    var length =array.length;
        left =typeof left ==='number'? left :0,
        right =typeof right ==='number'? right : length-1;

    if (left < right) {
        var index = left -1;
        // console.log(index, '---------');
        for (var i = left; i <= right; i++) { // 小问题
            if (array[i] <= array[right]) {
                index++;
                var temp = array[index];
                array[index] = array[i];
                array[i] = temp;
                // console.log(i, index, )
            }
        }
        console.log(index);
        // console.log(array);
        // quickSort(array, left, index -1);
        // quickSort(array, index +1, right);
    }
    return array;
}

console.log(quickSort([1, 4, 9, 10,2, 6,3,11,23, 1]));