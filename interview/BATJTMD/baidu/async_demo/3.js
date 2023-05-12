const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))
  
var test = asyncToGenerator(
    function* testG() {
      // await被编译成了yield
      const data = yield getData()
      console.log('data: ', data);
      const data2 = yield getData()
      console.log('data2: ', data2);
      return 'success'
    }
)

test().then(res => console.log(res))
// asyncToGenerator接受一个generator函数，返回一个promise，

