const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))
  
function* testG() {
    // await被编译成了yield
    const data = yield getData()
    console.log('data: ', data);
    const data2 = yield getData()
    console.log('data2: ', data2);
    return 'success'
}

var gen = testG()
var dataPromise = gen.next()
dataPromise.value.then((value1) => {
    var data2Promise = gen.next(value1)
    data2Promise.value.then((value2) => {
        // data2的value拿到了 继续调用next并且传递value2
         gen.next(value2)
         
        // console.log('data2: ', data2);
        // 此时就会打印出data2
    })
})