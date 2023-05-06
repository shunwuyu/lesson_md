- 为什么要手写promise, 难？
    开发中用的多， 源码写起来也比较有意思。
- promise 其实是一个规范
    https://promisesaplus.com/
    实现源码的过程，实现promise A+ 规范的要求
    看起来好多啊
- 测试用例
    跑通， https://github.com/promises-aplus/promises-tests
    800  多个
- 思路， 用法， 反推实现 promise1.js
    1. 基本使用
        -  同步
        - 异步
        - executor 是会出错的， try  catch
        - 多个then   
            切原生  undefined 前面的没有return 

    ```js 
    let p = new Promise((resolve, reject) => {
        resolve(100);
    }).then(data => {
        console.log('data:', data);
    }, reason => {
        console.log('reason:', reason);
    })
    ```
    ```js
    // 先看原生用法， 再打开调用
    // const Promise = require('./promise');

    let p = new Promise((resolve, reject) => {
        resolve(100);
    }).then(data => {
        console.log('data:', data);
    }, reason => {
        console.log('reason:', reason);
    })
    ```
    ```
    ```

-  多then  基于promise1, 目前报错，     
    原生的只要return 就可以
    then 后没有then  只有promise 才能then 
    promise2  把原来的代码放到新promise 里面 作为executor 立即运行
    试一下  可以调用then 
    目前问题 第二个then没有拿到值  return data 试下


- then 什么都不传， 不会跳跃
    原生的可以跳跃
    then 不传函数也能处理， 说明应该有个默认处理
    resolve  typeof      reject   throw 

    - 恢复  第一个第二个  试下
        return  data （原生的）  还是不行
        return promise 



