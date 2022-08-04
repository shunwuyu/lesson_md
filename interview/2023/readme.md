- React 的 setState 是同步还是异步？
    1. 从代码看   useEffect打印是异步的
    2. 从render 看，  同步 的， 执行了 0， 1， 2
        如果是异步的， 应该是  0(mount)   2(updated)
        同步的？
    3. App.jsx 没有setTimeout 
        0,1,2,3  同步   却表现得0,  3  异步   完全

- React 渲染的流程?
    react 通过 jsx 来描述界面，jsx 可以通过 babel 等编译器编译成 render function，然后执行后产生 vdom
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/693d4c78c6b34a0a88fb557f4c9b0e51~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

    这个 vdom 也不是直接渲染的，而是会先转化为 fiber，之后再渲染。

    因为 vdom 里每个节点只记录了子节点（children），没有记录兄弟节点，所以必须一次性渲染完，不能打断。

    而转成 fiber 的链表结构就会记录父节点（return）、子节点（child）、兄弟节点（sibling），就变成了可打断的。

    在 setTimeout  、事件监听器等函数里 setState 会同步执行
    setState 是批量执行的  有个executionContext 收集改变

- form 元素 enctype 是什么？
    - 表单的编码类型
        application/x-www-form-urlencoded：表单默认的编码类型
        multipart/form-data：如果包含文件，只能选择这种类型 
        text/plain：无需编码，直接发送

        