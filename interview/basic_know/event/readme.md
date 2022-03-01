[source](https://juejin.cn/post/6844903834075021326)

小红书看了几遍？

1. 为什么有了事件冒泡， 又有事件捕获？
    微软 事件冒泡  event bubbling 从最内层的元素开始发生，一直向上传播，直到document对象。
    p -> div -> body -> html -> document  还能再冒泡吗？
    网景  事件捕获 
    与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。
    document -> html -> body -> div -> p

2. 为了解决什么？ 
    事件流 事件发生顺序

3. ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/4/16/16a2654b0dd928ef~tplv-t2oaga2asx-watermark.awebp)
    哪几个阶段?
    1-5是捕获过程，5-6是目标阶段，6-10是冒泡阶段；

4. addEventListener 第三个参数的意义是？
    DOM2级事件  同时支持了事件捕获阶段和事件冒泡阶段
    element.addEventListener(event, function, useCapture)
    在那个阶段处理函数 
5. 事件代理
    由于事件冒泡机制，点击了 li 后会冒泡到 ul ，此时就会触发绑定在 ul 上的点击事件，再利用 target 找到事件实际发生的元素，就可以达到预期的效果。使用事件代理的好处不仅在于将多个事件处理函数减为一个，而且对于不同的元素可以有不同的处理方法。假如上述列表元素当中添加了其他的元素节点（如：a、span等），我们不必再一次循环给每一个元素绑定事件，直接修改事件代理的事件处理函数即可。
    （1）toLowerCase() 方法用于把字符串转换为小写。语法：stringObject.toLowerCase()
    （2）nodeName 属性指定节点的节点名称。

6. 用冒泡还是用捕获？
    事件捕获或者事件冒泡阶段处理并没有明显的优劣之分
    事件冒泡的事件流模型被所有主流的浏览器兼容，
    从兼容性角度来说还是建议大家使用事件冒泡模型。
7. IE浏览器兼容
    IE浏览器对addEventListener兼容性并不算太好，只有IE9以上可以使用。
    object.attachEvent(event, function)  加 on 

8. 阻止事件冒泡
    event.stopPropagation();
    在事件处理函数中返回 false 
    $("#div1").mousedown(function(event){
    var e=e||window.event;
    return false;
    });
    event.target==event.currentTarget 让触发事件的元素等于绑定事件的元素，
    也可以阻止事件冒泡；

- 阻止默认事件
    event.preventDefault( )
    return false