const el = <div className="abc" onClick={() => {}}>123</div>
 
// 旧的转化方式：
// React 元素
const el = /*#__PURE__*/ React.createElement(
  "div",
  {
    className: "abc",
    onClick: () => {}
  },
  "123"
);

// 新的转化方式：
var _jsxRuntime = require("react/jsx-runtime");
const el = /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
  className: "abc",
  onClick: () => {},
  children: "123"
});
 
// 虚拟 DOM
{
  type: 'div',
  props: {
    className: "abc",
    onClick: () => {},
    children: "123"
  }
}

Diff 算法的说明

- 第一次页面渲染的过程：1 JSX + state => 2 虚拟 DOM 树（JS 对象） => 3 浏览器中看到的 HTML 结构内容
- 当更新了状态，就会重新渲染组件，也就会重新生成一棵新的 虚拟 DOM 树
- Diff 算法就会：对比 初始虚拟 DOM 树 和 更新后的虚拟 DOM 树，找到不同之处，最终，只将不同的地方更新到页面中
- 在 React 中最多会同时存在两个虚拟 DOM 对象：最新的虚拟 DOM 和 上一次的虚拟 DOM
- 只要状态更新，组件就会重新“渲染”。此处的渲染执行的是
    1. 组件中的代码重新执行
    2. 重新生成新的虚拟 DOM 对象
    3. 进行一次 Diff

- 注意：这个过程都是 JS 操作，不涉及 DOM 操作。最终，只将变化的内容更新到浏览器中（这是 DOM 操作）。
render 重新执行，不代表把整个组件重新渲染到页面中。而实际上，React 内部会使用 虚拟 DOM 和 Diff 算法来做到 部分更新
部分更新（打补丁）：只将变化的地方重新渲染到页面中，这样可以减少 DOM 操作

1. 如果两棵树的根元素类型不同，React 会销毁旧树，创建新树
<div>
<Counter />
</div>

// 新树
<span>
<Counter />
</span>

执行过程：destory Counter -> insert Counter

2. Diff 算法的示例 - 2
对于类型相同的 React DOM 元素，React 会对比两者的属性是否相同，只更新不同的属性
当处理完这个 DOM 节点，React 就会递归处理子节点。

// 旧
<div className="before" title="stuff"></div>
// 新
<div className="after" title="stuff"></div>
只更新：className 属性
 
// 旧
<div style={{color: 'red', fontWeight: 'bold'}}></div>
// 新
<div style={{color: 'green', fontWeight: 'bold'}}></div>
————————————————
版权声明：本文为CSDN博主「前端路啊」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/m0_62118859/article/details/124537765
3. 当在子节点的后面添加一个节点，这时候两棵树的转化工作执行的很好
<ul>
  <li>first</li>
  <li>second</li>
</ul>

// 新
<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
 
执行过程：
React会匹配新旧两个<li>first</li>，匹配两个<li>second</li>，然后添加 <li>third</li> tree




