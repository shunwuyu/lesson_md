// function findIndexInFibonacciList(num: number) {
function findIndexInFibonacciList(num) {
    let n1 = 1;
    let n2 = 1;
    var arr = [1, 1];
    var j = 3;
    if ( num == 2 ) return 2
    for (let i = 2; i <= num; i++) {
        if (i == n1 + n2) {
            arr.push(i)
            n1 = arr[j - 2];
            n2 = arr[j - 1];
            j++;
        }
    }
    return arr.indexOf(num)
}

console.log(findIndexInFibonacciList(8))