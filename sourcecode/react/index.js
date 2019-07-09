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
/**
 * 
 * @param {*} vnode 
 * @param {*} container 
 * 递归插入节点
 */
function render(vnode, container) {
  // 当vnode为字符串时，渲染结果是一段文本
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);    // 设置属性
    });
  }
  vnode.children.forEach(child => render(child, dom));    // 递归渲染子节点
  return container.appendChild(dom);    // 将渲染结果挂载到真正的DOM上
}
function setAttribute( dom, name, value ) {
  // 如果属性名是className，则改回class
  if ( name === 'className' ) name = 'class';

  // 如果属性名是onXXX，则是一个事件监听方法
  if ( /on\w+/.test( name ) ) {
      name = name.toLowerCase();
      dom[ name ] = value || '';
  // 如果属性名是style，则更新style对象
  } else if ( name === 'style' ) {
      if ( !value || typeof value === 'string' ) {
          dom.style.cssText = value || '';
      } else if ( value && typeof value === 'object' ) {
          for ( let name in value ) {
              // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
              dom.style[ name ] = typeof value[ name ] === 'number' ? value[ name ] + 'px' : value[ name ];
          }
      }
  // 普通属性则直接更新属性
  } else {
    console.log(dom, name, value)
      // if ( name in dom ) {
      //     dom[ name ] = value || '';
      // }
      if ( value ) {
          dom.setAttribute( name, value );
      } else {
          dom.removeAttribute( name );
      }
  }
}
const ReactDOM = {
  render: ( vnode, container ) => {
      container.innerHTML = '';
      return render( vnode, container );
  }
}
function tick() {
  const element = (
      <div>
          <h1 style={{color: 'red'}} a="3" data-index="1">Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  ReactDOM.render(
      element,
      document.getElementById( 'root' )
  );
}

// setInterval( tick, 1000 );
tick()