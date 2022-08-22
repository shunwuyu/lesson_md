const promise = new Promise((resolve, reject) => {
    resolve("success1");
    reject("error");
    resolve("success2");
  });
promise
.then(res => {
    console.log("then: ", res);
}).catch(err => {
    console.log("catch: ", err);
})
// "then: success1"
// 构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用 
// 。验证了第一个结论，Promise的状态一经改变就不能再改变。
