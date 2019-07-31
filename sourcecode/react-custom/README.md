1. install: `npm install -g parcel-bundler`
2. 运行命令  `parcel index.html`
3. 这个transform-react-jsx就是将jsx转换成js的babel插件，它有一个pragma项，可以定义jsx转换方法的名称
4.  component.base保存的是组件的dom对象，反过来base._component保存的是dom对象所对应的组件，这个就是为了把他们关联起来

## 虚拟 dom
1. 我们建议使用 JSX 来编写你的 UI 组件。每个 JSX 元素都是调用 React.createElement() 的语法糖
```js
React.createElement(
  type,
  [ props ],
  [ ...children ]
)
```

[react 中的diff，来源于书本](https://juejin.im/post/5ac355576fb9a028cc616aad)