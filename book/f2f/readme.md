- 浏览器和js 关系？
    浏览器是JavaScript 的宿主环境。浏览器为 JavaScript 提供了 DOM API，能够让 JavaScript 操作浏览器环境，是JS 运行时。

- js 还有别的运行时吗？
    基于 Chrome V8（解析JS） 引擎开发的 JavaScript 运行时环境
    Node.js 也是 JavaScript 的一种宿主环境

    ![](https://p.ssl.qhimg.com/t01072a67f1315ec168.jpg)

- Node.js 不是浏览器， 不具备浏览器提供的DOM API, 浏览器有哪些对象？
    Window 对象， demo1/window.html   
        - 可以代表不同的手机吗？ 怎么判断？
        window.navigator.userAgent  手机模拟器
        /android/i.test(window.navigator.userAgent)
        /(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent)
    Location 对象
        https://juejin.cn/post/7038828977678450702   哪几部分构成
        location.protocal   https
        location.hostname   
        location.pathname
        http://152.136.185.210:7878/api/hy66/home/data?page=1&type=new    
        location.search
        location.port
        https://weui.io/#uploader
        location.hash
    Document 
        arr  es6 方法
        https://github.com/wesbos/es6.io/blob/master/07%20-%20An%20Array%20of%20Improvements/array-finding.html

        https://github.com/wesbos/es6.io/blob/master/07%20-%20An%20Array%20of%20Improvements/array-some-and-every.html

        let a = [1,2,3,4,5];
        let b = a.map(item => item * 2);
        console.log(b) // [2,4,6,8,10]

        let a = [1,2,3];
        let b = a.reduce((i, j) => {
        return i + j;
        }, 0);

        如何获取页面出现次数最多的 HTML 标签?
        https://juejin.cn/post/6865469040429629448

    HTMLElement 对象
        img.html
    Cookie 对象
    
