const promise = new Promise((resolve, reject) => {
    reject("error");
    resolve("success2");
  });
  promise
  .then(res => {
      console.log("then1: ", res);
    }).then(res => {
        console.log("then2: ", res);
    }).catch(err => {
        console.log("catch: ", err);
        // return Promise.resolve(3);
    }).then(res => {
        console.log("then3: ", res);
    })

// "catch: " "error"
// "then3: " undefined
// 验证了第三个结论，catch不管被连接到哪里，
// 都能捕获上层未捕捉过的错误。
// 那是因为catch()也会返回一个Promise,
// 且由于这个Promise没有返回值  
// 所以打印出来的是undefined