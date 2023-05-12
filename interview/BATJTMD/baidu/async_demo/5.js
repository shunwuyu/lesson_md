const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

// 高阶函数
function asyncToGenerator(generatorFunc) {
    return function() {
        const gen = generatorFunc.apply(this, arguments)
        // 返回一个promise 因为外部是用.then的方式 或者await的方式去使用这个函数的返回值的
        // var test = asyncToGenerator(testG)
        // test().then(res => console.log(res))
        return new Promise((resolve, reject) => {
            function step(key, arg) {
                let generatorResult
                try {
                    generatorResult = gen[key](arg)
                } catch(error) {
                    return reject(error)
                }
                const { value, done } = generatorResult
                if (done) {
                    return resolve(value)
                } else {
                    return Promise.resolve(
                        value
                    ).then(
                        function onResolve(val) {
                            step("next", val)
                        },
                        function onReject(err) {
                            step("throw", err)
                        },
                    )
                }
            }
            step("next")
        })
    }
}

function* testG() {
    // await被编译成了yield
    const data = yield getData()
    console.log('data: ', data);
    const data2 = yield getData()
    console.log('data2: ', data2);
    return 'success'
}

var test = asyncToGenerator(testG);
test().then(data => {
    console.log(data)
})