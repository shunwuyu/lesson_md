- dom
  文档对象模型
  DOM 是载入到浏览器中的文档模型，这个模型张啥样，它用节点树的形式来表现文档，每个节点代表文档的构成部分（例如： element——页面元素、字符串或注释等等）   
  允许我们的 js 访问文件中的节点并与之交互。节点可以被创建，移动或修改。事件监听器可以被添加到节点上并在给定事件发生时触发   
  DOM 并不是天生就被规范好了的，它是浏览器开始实现JavaScript时才出现的。这个传统的 DOM 有时会被称为 DOM 0   
- dom 事件级别 (dom 标准定义的事件处理级别)   
  标准 有很多 事件只是其中一部分     
  法律法规 婚姻法 经济法 只是其中一部分   
  我们遵纪守法 浏览器也要遵从我们的dom标准   
  问题：请用 dom2 级别事件 ...   

  dom0 element.onClick = function() {}   
  dom2 element.addEventListerner('click', function() {},   false)   
  dom3 element.addEventListener('keyup', function, {}, false); 事件类型增加了很多 键盘 鼠标事件
  为啥没有 dom1   
  dom1 标准 没有涉及和事件相关的东西，不代表dom1 不存在   
- dom 事件模型   
  捕获 冒泡   
- dom 事件流   
  历史： 浏览器发展到第四代的时候，浏览器开发团队遇到一个很有意思的问题，页面的哪一个部分拥有特定的事件，一组同心圆   
  单击了按钮，事件不仅仅发生在按钮身上，换句话说 在单击按钮的同时 也单击了按钮的容器，甚至单击了整个页面   
  说得就是：浏览器在当前页面和用户做交互的过程中，点击鼠标左键 事件怎么传到页面 或者说是 页面怎么接收到事件 这就是。。 怎么响应   
  捕获阶段   
  点下按钮 捕获到达目标元素 目标阶段   
  冒泡阶段：-> 目标到 window click 事件沿着dom树往上传播  
  捕获 目标 冒泡   
- 描述 dom 事件捕获的具体流程   
  第一个接受到事件的对象   
  现代浏览器都实现到了 window   
  window document html(document.documentElement) body 父元素   
- event 对象常见应用   
  e.preventDefault (a 标签)   
  e.stopProgration (阻止冒泡)   
  e.stopImmediateProgration (按钮 绑定两个 click a b 依此注册 a b 都会被执行 a 里面调用 阻止 b)
  e.currentTarget (当前绑定的事件)   
  e.target (被点击的元素)   
- 自定义事件   
 Event   
  var eve = new Event('custom');   
  // 绑定   
  ev.addEventListener('custome', function() {   
  })   
  触发   
  ev.dispatch(eve);   
- 事件移除 
- 事件类型
  - ui
    load error resize scroll
  - 焦点事件
    blur focus  
  - 鼠标 滚轮事件
    click dbclick mousedown mouseenter mouseleave mousemove mouseover 
  