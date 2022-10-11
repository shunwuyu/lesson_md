- 这完全不是合法的 JavaScript 代码。这种看起来“在 JavaScript 写的标签的”语法叫 JSX
    - 经过怎么转化成页面的元素的
        ![](a5c828feb27072c1ee31219bfad90b19_77aff59ba0bf06683c806a3cd2bd91b9.png)

    1. 思考一个问题：如何用 JavaScript 对象来表现一个 DOM 元素的结构
        ```js
        <div class='box' id='content'>
            <div class='title'>Hello</div>
            <button>Click</button>
        </div>
        ```
        - 一个 DOM 元素包含的信息其实只有三个 
            标签名，属性，子元素
            ```
            {
                tag: 'div',
                attrs: { className: 'box', id: 'content'},
                children: [
                    {
                    tag: 'div',
                    arrts: { className: 'title' },
                    children: ['Hello']
                    },
                    {
                    tag: 'button',
                    attrs: null,
                    children: ['Click']
                    }
                ]
                }
            ```

React.createElement 会构建一个 JavaScript 对象来描述你 HTML 结构的信息，包括标签名、属性、还有子元素等。这样的代码就是合法的 JavaScript 代码了。所以使用 React 和 JSX 的时候一定要经过编译的过程。

所谓的 JSX 其实就是 JavaScript 对象。每当在 JavaScript 代码中看到这种 JSX 结构的时候，脑子里面就可以自动做转化，这样对你理解 React.js 的组件写法很有好处。

ReactDOM.render 功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的元素上

- JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
- React.js 可以用 JSX 来描述你的组件长什么样的。
- JSX 在编译的时候会变成相应的 JavaScript 对象描述。
- react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。