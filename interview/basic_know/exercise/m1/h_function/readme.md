# 手写h函数

- 看ts代码
  1. snabbdom 性能强大的虚拟 DOM 库
  1.js  

- 自从有了 VNode ，开发页面的方式就变成了书写 VNode
  DOM -> VNODE

  1. <h1></h1>
    ```js
    function h() {
      return {
          _isVNode: true,
          flags: VNodeFlags.ELEMENT_HTML,
          tag: 'h1',
          data: null,
          children: null,
          childFlags: ChildrenFlags.NO_CHILDREN,
          el: null
      }
    }
    ```  
  2. 为了让 h 函数更加灵活，我们可以增加一些参数
    tag, data, children
    

