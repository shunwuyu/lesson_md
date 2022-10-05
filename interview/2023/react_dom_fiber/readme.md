https://blog.csdn.net/m0_62118859/article/details/124537765
- 虚拟 DOM
    1. 虚拟 DOM（Virtual DOM），就是一个 JS 对象，用来描述我们希望在页面中看到的 HTML 结构内容
    2. 为什么使用虚拟 DOM?
         真实 DOM 对象属性多，处理起来繁琐、效率低。更重要的原因：React 要做跨平台开发，而不是被束缚在浏览器端
         - 原生 DOM 对象： 也是一个 JS 对象，是浏览器默认提供的
         - DOM 对象 和 HTML 元素之间是一一对应的关系

- React JSX 语法转化的过程 
    转化过程：JSX => React.createEelement() 或 _jsxRuntime => 虚拟 DOM ----> DOM -> HTML

