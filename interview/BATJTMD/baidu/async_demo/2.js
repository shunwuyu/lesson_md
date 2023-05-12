const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

function* testG() {
    // await被编译成了yield
    const data = yield getData()
    console.log('data: ', data);
    const data2 = yield getData()
    console.log('data2: ', data2);
    return 'success'
  }
  const gen = testG(); // 返回一个迭代器
  console.log(gen);
  // 第一次getData()所返回的promise  data值并没有被确定
//   下一次调用next的时候，传的参数会被作为上一个yield前面接受的值
  var dataPromise = gen.next()
  console.log(dataPromise);
  gen.next('data1')
//   console.log(gen.next(1));
//   console.log(gen.next(2));
//   console.log(gen.next(3));
  