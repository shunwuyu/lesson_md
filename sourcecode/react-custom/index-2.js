class Component {
  constructor(props = {}) {
    this.state = {};
    this.props = props;
  }
  setState(stateChange) {
    // 将修改合并到state
    Object.assign(this.state, stateChange);
    renderComponent(this);
  }
}
function h(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
}
// 将上文定义的 h 方法放到对象React中
const React = {
  h
}

const element = (
  <div>
    hello<span>world!</span>
  </div>
);
// set props
function setComponentProps(component, props) {
  // 如果没有 base 属性 说明 第一次挂载
  if (!component.base) {
    if (component.componentWillMount) component.componentWillMount();

  }
  // 否则 更新阶段 
  else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }
  component.props = props;

  renderComponent(component);

}
// 创建组件
function createComponent(component, props) {
  let inst;
  // 如果是类定义组件，则直接返回实例
  if (component.prototype && component.prototype.render) {
    inst = new component(props);
    // 如果是函数定义组件，则将其扩展为类定义组件
  } else {
    inst = new Component(props);
    inst.constructor = component;
    inst.render = function () {
      // 返回 function 节点
      return this.constructor(props);
    }
  }

  return inst;
}
/**
 * 
 * @param {*} vnode 
 * @param {*} container 
 * 递归插入节点
 */
function render(vnode, container) {
  return container.appendChild(_render(vnode));
}
/**
 * 
 * @param {*} vnode 接受 vnode
 */
function _render(vnode) {
  if (typeof vnode.tag === 'function') {
    // 专门用来渲染 类组件 方法组件
    const component = createComponent(vnode.tag, vnode.attrs);
    setComponentProps(component, vnode.attrs);
    return component.base;
  }
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
  if (typeof vnode === 'number') vnode = String(vnode);
  if (typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode);
    return textNode;
  }
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
    });
  }
  vnode.children.forEach(child => render(child, dom));    // 递归渲染子节点
  return dom;
}
function setAttribute(dom, name, value) {
  // 如果属性名是className，则改回class
  if (name === 'className') name = 'class';

  // 如果属性名是onXXX，则是一个事件监听方法
  if (/on\w+/.test(name)) {
    name = name.toLowerCase();
    dom[name] = value || '';
    // 如果属性名是style，则更新style对象
  } else if (name === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      for (let name in value) {
        // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
        dom.style[name] = typeof value[name] === 'number' ? value[name] + 'px' : value[name];
      }
    }
    // 普通属性则直接更新属性
  } else {
    // if ( name in dom ) {
    //     dom[ name ] = value || '';
    // }
    if (value) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name);
    }
  }
}
const ReactDOM = {
  render: (vnode, container) => {
    container.innerHTML = '';
    return render(vnode, container);
  }
}
function Welcome() {
  return (
    <div>
      <h1>head</h1>
      Welcome
    </div>
  )
}
class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1
    }
  }
  handleAdd() {
    let { a }  = this.state;
    a ++
    this.setState({
      a
    })
  }
  render() {
    return (
      <div>
        {this.state.a}
        <button onClick={this.handleAdd.bind(this)}>
        +
      </button>
      </div>
      
    )
  }
}
function tick() {
  ReactDOM.render(
    <div>
      <Demo />
    <Welcome />
    </div>,
    document.getElementById('root')
  );
}

// setInterval( tick, 1000 );
tick()
function renderComponent(component) {
  let base;
  // 执行 render 方法 返回的是 vnode
  const renderer = component.render();
  // 执行完 vnode 生命周期 componentWillUpdate
  if (component.base && component.componentWillUpdate) {
    component.componentWillUpdate();
  }
  // base 是 _render 返回的 真实 dom
  base = _render(renderer);
  // 渲染完 如果 有 base 属性 说明更新完成
  // 没有 base 属性说明 挂载完成

  if (component.base) {
    if (component.componentDidUpdate) component.componentDidUpdate();
  } else if (component.componentDidMount) {
    component.componentDidMount();
  }
  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base);
  }
  component.base = base;
  base._component = component;
}