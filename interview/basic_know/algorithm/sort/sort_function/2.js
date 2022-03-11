let arr = [23, 12, 32, 5, 21, 7, 1]

console.log(arr)
arr.sort((a, b) => {
    console.log("a:" + a, "b:" + b)
    return 1
})
console.log(arr)