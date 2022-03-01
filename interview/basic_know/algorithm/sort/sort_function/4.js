let arr = []
for(let i = 0 ; i < 100000 ; i++){
    arr.push(parseInt(Math.random() * 10000))
}
//performance.now()H5的一个新的api，效果相当于Date.now()，不过它更强大
let startTime = performance.now()
arr.sort((a, b) => {
    return a - b
})
let endTime = performance.now()

console.log(endTime - startTime)