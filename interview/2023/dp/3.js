const fib = function(n) { 
    if(n<2) return n
    let arr = [0,1]; // 前两位是一定的
    for(let i=2;i<=n;i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}
console.time()
fib(40)
console.timeEnd()