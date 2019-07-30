function quickSort(arr) {
    if (arr.length <= 1) { return arr;} //退出条件
    var left = [],
        right = [],
        pivot = Math.round(arr.length / 2) // 中间点 四舍五入
        base = arr.splice(pivot, 1)[0];
    
    for (var i = 0;  i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([base], quickSort(right));
}

