// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/flags.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VNodeFlags = exports.ChildrenFlags = void 0;
var VNodeFlags = {
  // html 标签
  ELEMENT_HTML: 1,
  // SVG 标签
  ELEMENT_SVG: 1 << 1,
  // 普通有状态组件
  COMPONENT_STATEFUL_NORMAL: 1 << 2,
  // 需要被keepAlive的有状态组件
  COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE: 1 << 3,
  // 已经被keepAlive的有状态组件
  COMPONENT_STATEFUL_KEPT_ALIVE: 1 << 4,
  // 函数式组件
  COMPONENT_FUNCTIONAL: 1 << 5,
  // 纯文本
  TEXT: 1 << 6,
  // Fragment
  FRAGMENT: 1 << 7,
  // Portal
  PORTAL: 1 << 8
};
// html 和 svg 都是标签元素，可以用 ELEMENT 表示
exports.VNodeFlags = VNodeFlags;
VNodeFlags.ELEMENT = VNodeFlags.ELEMENT_HTML | VNodeFlags.ELEMENT_SVG;
// 普通有状态组件、需要被keepAlive的有状态组件、已经被keepAlice的有状态组件 都是“有状态组件”，统一用 COMPONENT_STATEFUL 表示
VNodeFlags.COMPONENT_STATEFUL = VNodeFlags.COMPONENT_STATEFUL_NORMAL | VNodeFlags.COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE | VNodeFlags.COMPONENT_STATEFUL_KEPT_ALIVE;
// 有状态组件 和  函数式组件都是“组件”，用 COMPONENT 表示
VNodeFlags.COMPONENT = VNodeFlags.COMPONENT_STATEFUL | VNodeFlags.COMPONENT_FUNCTIONAL;
var ChildrenFlags = {
  // 未知的 children 类型
  UNKNOWN_CHILDREN: 0,
  // 没有 children
  NO_CHILDREN: 1,
  // children 是单个 VNode
  SINGLE_VNODE: 1 << 1,
  // children 是多个拥有 key 的 VNode
  KEYED_VNODES: 1 << 2,
  // children 是多个没有 key 的 VNode
  NONE_KEYED_VNODES: 1 << 3
};
exports.ChildrenFlags = ChildrenFlags;
ChildrenFlags.MULTIPLE_VNODES = ChildrenFlags.KEYED_VNODES | ChildrenFlags.NONE_KEYED_VNODES;
},{}],"src/h.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portal = exports.Fragment = void 0;
exports.createTextVNode = createTextVNode;
exports.h = h;
var _flags = require("./flags");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Fragment = Symbol();
exports.Fragment = Fragment;
var Portal = Symbol();
exports.Portal = Portal;
function h(tag) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // 确定 flags
  var flags = null;
  if (typeof tag === 'string') {
    flags = tag === 'svg' ? _flags.VNodeFlags.ELEMENT_SVG : _flags.VNodeFlags.ELEMENT_HTML;
  } else if (tag === Fragment) {
    flags = _flags.VNodeFlags.FRAGMENT;
  } else if (tag === Portal) {
    flags = _flags.VNodeFlags.PORTAL;
    tag = data && data.target;
  } else {
    // 兼容 Vue2 的对象式组件
    if (tag !== null && _typeof(tag) === 'object') {
      flags = tag.functional ? _flags.VNodeFlags.COMPONENT_FUNCTIONAL // 函数式组件
      : _flags.VNodeFlags.COMPONENT_STATEFUL_NORMAL; // 有状态组件
    } else if (typeof tag === 'function') {
      // Vue3 的类组件
      flags = tag.prototype && tag.prototype.render ? _flags.VNodeFlags.COMPONENT_STATEFUL_NORMAL // 有状态组件
      : _flags.VNodeFlags.COMPONENT_FUNCTIONAL; // 函数式组件
    }
  }

  // 确定 childFlags
  var childFlags = null;
  if (Array.isArray(children)) {
    var _children = children,
      length = _children.length;
    if (length === 0) {
      // 没有 children
      childFlags = _flags.ChildrenFlags.NO_CHILDREN;
    } else if (length === 1) {
      // 单个子节点
      childFlags = _flags.ChildrenFlags.SINGLE_VNODE;
      children = children[0];
    } else {
      // 多个子节点，且子节点使用key
      childFlags = _flags.ChildrenFlags.KEYED_VNODES;
      children = normalizeVNodes(children);
    }
  } else if (children == null) {
    // 没有子节点
    childFlags = _flags.ChildrenFlags.NO_CHILDREN;
  } else if (children._isVNode) {
    // 单个子节点
    childFlags = _flags.ChildrenFlags.SINGLE_VNODE;
  } else {
    // 其他情况都作为文本节点处理，即单个子节点，会调用 createTextVNode 创建纯文本类型的 VNode
    childFlags = _flags.ChildrenFlags.SINGLE_VNODE;
    children = createTextVNode(children + '');
  }

  // 返回 VNode 对象
  return {
    _isVNode: true,
    flags: flags,
    tag: tag,
    data: data,
    children: children,
    childFlags: childFlags,
    el: null
  };
}
function normalizeVNodes(children) {
  var newChildren = [];
  // 遍历 children
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.key == null) {
      // 如果原来的 VNode 没有key，则使用竖线(|)与该VNode在数组中的索引拼接而成的字符串作为key
      child.key = '|' + i;
    }
    newChildren.push(child);
  }
  // 返回新的children，此时 children 的类型就是 ChildrenFlags.KEYED_VNODES
  return newChildren;
}
function createTextVNode(text) {
  return {
    _isVNode: true,
    // flags 是 VNodeFlags.TEXT
    flags: _flags.VNodeFlags.TEXT,
    tag: null,
    data: null,
    // 纯文本类型的 VNode，其 children 属性存储的是与之相符的文本内容
    children: text,
    // 文本节点没有子节点
    childFlags: _flags.ChildrenFlags.NO_CHILDREN
  };
}
},{"./flags":"src/flags.js"}],"src/patchData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchData = patchData;
var domPropsRE = /\W|^(?:value|checked|selected|muted)$/;
function patchData(el, key, prevValue, nextValue) {
  switch (key) {
    case 'style':
      for (var k in nextValue) {
        el.style[k] = nextValue[k];
      }
      for (var _k in prevValue) {
        if (!nextValue.hasOwnProperty(_k)) {
          el.style[_k] = '';
        }
      }
      break;
    case 'class':
      el.className = nextValue;
      break;
    default:
      if (key[0] === 'o' && key[1] === 'n') {
        // 事件
        // 移除旧事件
        if (prevValue) {
          el.removeEventListener(key.slice(2), prevValue);
        }
        // 添加新事件
        if (nextValue) {
          el.addEventListener(key.slice(2), nextValue);
        }
      } else if (domPropsRE.test(key)) {
        // 当做 DOM Prop 处理
        el[key] = nextValue;
      } else {
        // 当做 Attr 处理
        el.setAttribute(key, nextValue);
      }
      break;
  }
}
},{}],"src/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;
var _flags = require("./flags");
var _h = require("./h");
var _patchData = require("./patchData");
function render(vnode, container) {
  var prevVNode = container.vnode;
  if (prevVNode == null) {
    if (vnode) {
      // 没有旧的 VNode，使用 `mount` 函数挂载全新的 VNode
      mount(vnode, container);
      // 将新的 VNode 添加到 container.vnode 属性下，这样下一次渲染时旧的 VNode 就存在了
      container.vnode = vnode;
    }
  } else {
    if (vnode) {
      // 有旧的 VNode，则调用 `patch` 函数打补丁
      patch(prevVNode, vnode, container);
      // 更新 container.vnode
      container.vnode = vnode;
    } else {
      // 有旧的 VNode 但是没有新的 VNode，这说明应该移除 DOM，在浏览器中可以使用 removeChild 函数。
      container.removeChild(prevVNode.el);
      container.vnode = null;
    }
  }
}
function mount(vnode, container, isSVG, refNode) {
  var flags = vnode.flags;
  if (flags & _flags.VNodeFlags.ELEMENT) {
    // 挂载普通标签
    mountElement(vnode, container, isSVG, refNode);
  } else if (flags & _flags.VNodeFlags.COMPONENT) {
    // 挂载组件
    mountComponent(vnode, container, isSVG);
  } else if (flags & _flags.VNodeFlags.TEXT) {
    // 挂载纯文本
    mountText(vnode, container);
  } else if (flags & _flags.VNodeFlags.FRAGMENT) {
    // 挂载 Fragment
    mountFragment(vnode, container, isSVG);
  } else if (flags & _flags.VNodeFlags.PORTAL) {
    // 挂载 Portal
    mountPortal(vnode, container, isSVG);
  }
}
var domPropsRE = /\W|^(?:value|checked|selected|muted)$/;
function mountElement(vnode, container, isSVG, refNode) {
  isSVG = isSVG || vnode.flags & _flags.VNodeFlags.ELEMENT_SVG;
  var el = isSVG ? document.createElementNS('http://www.w3.org/2000/svg', vnode.tag) : document.createElement(vnode.tag);
  vnode.el = el;
  var data = vnode.data;
  if (data) {
    for (var key in data) {
      (0, _patchData.patchData)(el, key, null, data[key]);
    }
  }
  var childFlags = vnode.childFlags;
  var children = vnode.children;
  if (childFlags !== _flags.ChildrenFlags.NO_CHILDREN) {
    if (childFlags & _flags.ChildrenFlags.SINGLE_VNODE) {
      mount(children, el, isSVG);
    } else if (childFlags & _flags.ChildrenFlags.MULTIPLE_VNODES) {
      for (var i = 0; i < children.length; i++) {
        mount(children[i], el, isSVG);
      }
    }
  }
  refNode ? container.insertBefore(el, refNode) : container.appendChild(el);
}
function mountText(vnode, container) {
  var el = document.createTextNode(vnode.children);
  vnode.el = el;
  container.appendChild(el);
}
function mountFragment(vnode, container, isSVG) {
  // 拿到 children 和 childFlags
  var children = vnode.children,
    childFlags = vnode.childFlags;
  switch (childFlags) {
    case _flags.ChildrenFlags.SINGLE_VNODE:
      // 如果是单个子节点，则直接调用 mount
      mount(children, container, isSVG);
      break;
    case _flags.ChildrenFlags.NO_CHILDREN:
      // 如果没有子节点，等价于挂载空片段，会创建一个空的文本节点占位
      var placeholder = (0, _h.createTextVNode)('');
      mountText(placeholder, container);
      break;
    default:
      // 多个子节点，遍历挂载之
      for (var i = 0; i < children.length; i++) {
        mount(children[i], container, isSVG);
      }
  }
}
function mountPortal(vnode, container) {
  var tag = vnode.tag,
    children = vnode.children,
    childFlags = vnode.childFlags;

  // 获取挂载点
  var target = typeof tag === 'string' ? document.querySelector(tag) : tag;
  if (childFlags & _flags.ChildrenFlags.SINGLE_VNODE) {
    // 将 children 挂在到 target 上，而非 container
    mount(children, target);
  } else if (childFlags & _flags.ChildrenFlags.MULTIPLE_VNODES) {
    for (var i = 0; i < children.length; i++) {
      // 将 children 挂在到 target 上，而非 container
      mount(children[i], target);
    }
  }

  // 占位的空文本节点
  var placeholder = (0, _h.createTextVNode)('');
  // 将该节点挂载到 container 中
  mountText(placeholder, container, null);
  // el 属性引用该节点
  vnode.el = placeholder.el;
}
function mountComponent(vnode, container, isSVG) {
  if (vnode.flags & _flags.VNodeFlags.COMPONENT_STATEFUL) {
    mountStatefulComponent(vnode, container, isSVG);
  } else {
    mountFunctionalComponent(vnode, container, isSVG);
  }
}
function mountStatefulComponent(vnode, container, isSVG) {
  // 创建组件实例
  var instance = vnode.children = new vnode.tag();
  // 初始化 props
  instance.$props = vnode.data;
  instance._update = function () {
    if (instance._mounted) {
      // 更新
      // 1、拿到旧的 VNode
      var prevVNode = instance.$vnode;
      // 2、重渲染新的 VNode
      var nextVNode = instance.$vnode = instance.render();
      // 3、patch 更新
      patch(prevVNode, nextVNode, prevVNode.el.parentNode);
      // 4、更新 vnode.el 和 $el
      instance.$el = vnode.el = instance.$vnode.el;
    } else {
      // 1、渲染VNode
      instance.$vnode = instance.render();
      // 2、挂载
      mount(instance.$vnode, container, isSVG);
      // 3、组件已挂载的标识
      instance._mounted = true;
      // 4、el 属性值 和 组件实例的 $el 属性都引用组件的根DOM元素
      instance.$el = vnode.el = instance.$vnode.el;
      // 5、调用 mounted 钩子
      instance.mounted && instance.mounted();
    }
  };
  instance._update();
}
function mountFunctionalComponent(vnode, container, isSVG) {
  vnode.handle = {
    prev: null,
    next: vnode,
    container: container,
    update: function update() {
      if (vnode.handle.prev) {
        // 更新
        // prevVNode 是旧的组件VNode，nextVNode 是新的组件VNode
        var prevVNode = vnode.handle.prev;
        var nextVNode = vnode.handle.next;
        // prevTree 是组件产出的旧的 VNode
        var prevTree = prevVNode.children;
        // nextTree 是组件产出的新的 VNode
        var props = nextVNode.data;
        var nextTree = nextVNode.children = nextVNode.tag(props);
        // 调用 patch 函数更新
        patch(prevTree, nextTree, vnode.handle.container);
      } else {
        // 获取 props
        var _props = vnode.data;
        // 获取 VNode
        var $vnode = vnode.children = vnode.tag(_props);
        // 挂载
        mount($vnode, container, isSVG);
        // el 元素引用该组件的根元素
        vnode.el = $vnode.el;
      }
    }
  };

  // 立即调用 vnode.handle.update 完成初次挂载
  vnode.handle.update();
}
function patch(prevVNode, nextVNode, container) {
  var nextFlags = nextVNode.flags;
  var prevFlags = prevVNode.flags;
  if (prevFlags !== nextFlags) {
    replaceVNode(prevVNode, nextVNode, container);
  } else if (nextFlags & _flags.VNodeFlags.ELEMENT) {
    patchElement(prevVNode, nextVNode, container);
  } else if (nextFlags & _flags.VNodeFlags.COMPONENT) {
    patchComponent(prevVNode, nextVNode, container);
  } else if (nextFlags & _flags.VNodeFlags.TEXT) {
    patchText(prevVNode, nextVNode);
  } else if (nextFlags & _flags.VNodeFlags.FRAGMENT) {
    patchFragment(prevVNode, nextVNode, container);
  } else if (nextFlags & _flags.VNodeFlags.PORTAL) {
    patchPortal(prevVNode, nextVNode);
  }
}
function replaceVNode(prevVNode, nextVNode, container) {
  container.removeChild(prevVNode.el);
  if (prevVNode.flags & _flags.VNodeFlags.COMPONENT_STATEFUL_NORMAL) {
    var instance = prevVNode.children;
    instance.unmounted && instance.unmounted();
  }
  mount(nextVNode, container);
}
function patchElement(prevVNode, nextVNode, container) {
  // 如果新旧 VNode 描述的是不同的标签，则调用 replaceVNode 函数使用新的 VNode 替换旧的 VNode
  if (prevVNode.tag !== nextVNode.tag) {
    replaceVNode(prevVNode, nextVNode, container);
    return;
  }

  // 拿到 el 元素，注意这时要让 nextVNode.el 也引用该元素
  var el = nextVNode.el = prevVNode.el;
  var prevData = prevVNode.data;
  var nextData = nextVNode.data;
  if (nextData) {
    for (var key in nextData) {
      var prevValue = prevData[key];
      var nextValue = nextData[key];
      (0, _patchData.patchData)(el, key, prevValue, nextValue);
    }
  }
  if (prevData) {
    for (var _key in prevData) {
      var _prevValue = prevData[_key];
      if (_prevValue && !nextData.hasOwnProperty(_key)) {
        (0, _patchData.patchData)(el, _key, _prevValue, null);
      }
    }
  }

  // 调用 patchChildren 函数递归的更新子节点
  patchChildren(prevVNode.childFlags,
  // 旧的 VNode 子节点的类型
  nextVNode.childFlags,
  // 新的 VNode 子节点的类型
  prevVNode.children,
  // 旧的 VNode 子节点
  nextVNode.children,
  // 新的 VNode 子节点
  el // 当前标签元素，即这些子节点的父节点
  );
}

function patchChildren(prevChildFlags, nextChildFlags, prevChildren, nextChildren, container) {
  switch (prevChildFlags) {
    // 旧的 children 是单个子节点，会执行该 case 语句块
    case _flags.ChildrenFlags.SINGLE_VNODE:
      switch (nextChildFlags) {
        case _flags.ChildrenFlags.SINGLE_VNODE:
          // 新的 children 也是单个子节点时，会执行该 case 语句块
          patch(prevChildren, nextChildren, container);
          break;
        case _flags.ChildrenFlags.NO_CHILDREN:
          // 新的 children 中没有子节点时，会执行该 case 语句块
          container.removeChild(prevChildren.el);
          break;
        default:
          // 但新的 children 中有多个子节点时，会执行该 case 语句块
          container.removeChild(prevChildren.el);
          for (var i = 0; i < nextChildren.length; i++) {
            mount(nextChildren[i], container);
          }
          break;
      }
      break;
    // 旧的 children 中没有子节点时，会执行该 case 语句块
    case _flags.ChildrenFlags.NO_CHILDREN:
      switch (nextChildFlags) {
        case _flags.ChildrenFlags.SINGLE_VNODE:
          // 新的 children 是单个子节点时，会执行该 case 语句块
          mount(nextChildren, container);
          break;
        case _flags.ChildrenFlags.NO_CHILDREN:
          // 新的 children 中没有子节点时，会执行该 case 语句块
          break;
        default:
          // 但新的 children 中有多个子节点时，会执行该 case 语句块
          for (var _i = 0; _i < nextChildren.length; _i++) {
            mount(nextChildren[_i], container);
          }
          break;
      }
      break;
    // 旧的 children 中有多个子节点时，会执行该 case 语句块
    default:
      switch (nextChildFlags) {
        case _flags.ChildrenFlags.SINGLE_VNODE:
          for (var _i2 = 0; _i2 < prevChildren.length; _i2++) {
            container.removeChild(prevChildren[_i2].el);
          }
          mount(nextChildren, container);
          break;
        case _flags.ChildrenFlags.NO_CHILDREN:
          for (var _i3 = 0; _i3 < prevChildren.length; _i3++) {
            container.removeChild(prevChildren[_i3].el);
          }
          break;
        default:
          // 但新的 children 中有多个子节点时，会执行该 case 语句块
          var lastIndex = 0; // ? 不停的被跟换的值
          // nextChildren 最后的真实DOM 应该的样子？
          for (var _i4 = 0; _i4 < nextChildren.length; _i4++) {
            var nextVNode = nextChildren[_i4];
            var j = 0,
              find = false; // 新节点在旧的节点里面吗？ 
            //   有， patch 复用这个节点  prevChildren.el
            console.log('1111');
            for (j; j < prevChildren.length; j++) {
              var prevVNode = prevChildren[j];
              if (nextVNode.key === prevVNode.key) {
                find = true;
                patch(prevVNode, nextVNode, container);
                if (j < lastIndex) {
                  // 需要移动

                  var refNode = nextChildren[_i4 - 1].el.nextSibling;
                  container.insertBefore(prevVNode.el, refNode);
                  break;
                } else {
                  console.log('eeee');
                  // 更新 lastIndex
                  lastIndex = j;
                }
              }
            }
            if (!find) {
              // 挂载新节点
              var _refNode = _i4 - 1 < 0 ? prevChildren[0].el : nextChildren[_i4 - 1].el.nextSibling;
              mount(nextVNode, container, false, _refNode);
            }
          }
          // 移除已经不存在的节点
          var _loop = function _loop() {
            var prevVNode = prevChildren[_i5];
            var has = nextChildren.find(function (nextVNode) {
              return nextVNode.key === prevVNode.key;
            });
            if (!has) {
              // 移除
              container.removeChild(prevVNode.el);
            }
          };
          for (var _i5 = 0; _i5 < prevChildren.length; _i5++) {
            _loop();
          }
          break;
      }
      break;
  }
}
function patchText(prevVNode, nextVNode) {
  // 拿到文本节点 el，同时让 nextVNode.el 指向该文本节点
  var el = nextVNode.el = prevVNode.el;
  // 只有当新旧文本内容不一致时才有必要更新
  if (nextVNode.children !== prevVNode.children) {
    el.nodeValue = nextVNode.children;
  }
}
function patchFragment(prevVNode, nextVNode, container) {
  // 直接调用 patchChildren 函数更新 新旧片段的子节点即可
  patchChildren(prevVNode.childFlags,
  // 旧片段的子节点类型
  nextVNode.childFlags,
  // 新片段的子节点类型
  prevVNode.children,
  // 旧片段的子节点
  nextVNode.children,
  // 新片段的子节点
  container);
  switch (nextVNode.childFlags) {
    case _flags.ChildrenFlags.SINGLE_VNODE:
      nextVNode.el = nextVNode.children.el;
      break;
    case _flags.ChildrenFlags.NO_CHILDREN:
      nextVNode.el = prevVNode.el;
      break;
    default:
      nextVNode.el = nextVNode.children[0].el;
  }
}
function patchPortal(prevVNode, nextVNode) {
  patchChildren(prevVNode.childFlags, nextVNode.childFlags, prevVNode.children, nextVNode.children, prevVNode.tag // 注意 container 是旧的 container
  );
  // 让 nextVNode.el 指向 prevVNode.el
  nextVNode.el = prevVNode.el;

  // 如果新旧容器不同，才需要搬运
  if (nextVNode.tag !== prevVNode.tag) {
    // 获取新的容器元素，即挂载目标
    var container = typeof nextVNode.tag === 'string' ? document.querySelector(nextVNode.tag) : nextVNode.tag;
    switch (nextVNode.childFlags) {
      case _flags.ChildrenFlags.SINGLE_VNODE:
        // 如果新的 Portal 是单个子节点，就把该节点搬运到新容器中
        container.appendChild(nextVNode.children.el);
        break;
      case _flags.ChildrenFlags.NO_CHILDREN:
        // 新的 Portal 没有子节点，不需要搬运
        break;
      default:
        // 如果新的 Portal 是多个子节点，遍历逐个将它们搬运到新容器中
        for (var i = 0; i < nextVNode.children.length; i++) {
          container.appendChild(nextVNode.children[i].el);
        }
        break;
    }
  }
}
function patchComponent(prevVNode, nextVNode, container) {
  if (nextVNode.tag !== prevVNode.tag) {
    replaceVNode(prevVNode, nextVNode, container);
  } else if (nextVNode.flags & _flags.VNodeFlags.COMPONENT_STATEFUL_NORMAL) {
    // 获取组件实例
    var instance = nextVNode.children = prevVNode.children;
    // 更新 props
    instance.$props = nextVNode.data;
    // 更新组件
    instance._update();
  } else {
    // 更新函数式组件
    var handle = nextVNode.handle = prevVNode.handle;
    handle.prev = prevVNode;
    handle.next = nextVNode;
    handle.container = container;
    handle.update();
  }
}
},{"./flags":"src/flags.js","./h":"src/h.js","./patchData":"src/patchData.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _h = require("./h");
var _render = _interopRequireDefault(require("./render"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// console.log('////')
// 旧的 VNode
var prevVNode = (0, _h.h)('div', null, [(0, _h.h)('p', {
  key: 'a'
}, '节点1'), (0, _h.h)('p', {
  key: 'b'
}, '节点2'), (0, _h.h)('p', {
  key: 'c'
}, '节点3')]);

// 新的 VNode
var nextVNode = (0, _h.h)('div', null, [(0, _h.h)('p', {
  key: 'c'
}, '节点3'), (0, _h.h)('p', {
  key: 'a'
}, '节点1'), (0, _h.h)('p', {
  key: 'b'
}, '节点2')]);
(0, _render.default)(prevVNode, document.getElementById('app'));

// 2秒后更新
setTimeout(function () {
  (0, _render.default)(nextVNode, document.getElementById('app'));
}, 2000);
},{"./h":"src/h.js","./render":"src/render.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65325" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map