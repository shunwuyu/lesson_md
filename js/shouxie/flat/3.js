function flatten(arr) {
    // 只要有数组
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten([1,2,[3, 4, [5, 6]]]))
