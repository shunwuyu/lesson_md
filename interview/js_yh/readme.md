##  JS 优化总体规则

- 当需要时才优化
  -  提升JS 文件加载性能
    CSS放在Head JS 文件放在body里
    DOM   CSSOM 树
    script defer 属性
    阻塞特性 单一进程来处理用户界面（UI）刷新和 JavaScript
    就是 <scritp>标签每次出现，都会让页面等待脚本的解析和执行，无论当前的 JavaScript 代码是内嵌的还是包含在外链文件中，页面的下载和渲染都必须停下来等待脚本执行完成。

  - JS 变量和函数优化
    - id 选择器， // class
    - eval  性能
      不要用 
    - JS 函数尽可能保持简洁
      可维护性 大文件用js 函数来组织
    - 使用事件节流函数
      scroll  reset  n 多次 用户无感知
    - 使用事件委托
      事件冒泡机制
      1.大量减少内存占用，减少事件注册。
      2.新增元素实现动态绑定事件
      在MVVM  componentWillUnmount ()    移除interval  scroll 类的事件监听
      ul>li>a    ul上   提升效率和真个的响应速度的

- JS 动画优化
  - 尽量避免添加大量的JS动画
    回流 复杂  性能
  - 尽量使用CSS3动画
    GPU 不占用JS主线程； 以利用硬件加速 浏览器可对动画做优化
  - 尽量使用Canvas动画
  - 合理使用requestAnimationFrame 动画代替setTimeout, setInterval
    requestAnimationFrame 系统时钟 在正确的时间渲染， setTimeout setInterval 无法保证函数的执行时机

- 合理使用缓存
  - 合理缓存DOM 对象
  - 缓存列表长度
    let lis = document.querySelectorAll('ul>li')
    let len = lis.length;
    for (let i = 0; i < lis.length; i++) { }
  - 使用可缓存的ajax
- 考虑可维护性
