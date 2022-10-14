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
exports.ChildrenFlags = exports.VNodeFlags = void 0;
var VNodeFlags = {
  // html 标签
  ELEMENT_HTML: 1,
  // SVG 标签 2
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
}; // html 和 svg 都是标签元素，可以用 ELEMENT 表示

exports.VNodeFlags = VNodeFlags;
VNodeFlags.ELEMENT = VNodeFlags.ELEMENT_HTML | VNodeFlags.ELEMENT_SVG; // 普通有状态组件、需要被keepAlive的有状态组件、已经被keepAlice的有状态组件 都是“有状态组件”，统一用 COMPONENT_STATEFUL 表示

VNodeFlags.COMPONENT_STATEFUL = VNodeFlags.COMPONENT_STATEFUL_NORMAL | VNodeFlags.COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE | VNodeFlags.COMPONENT_STATEFUL_KEPT_ALIVE;
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
exports.h = h;
exports.createTextVNode = createTextVNode;
exports.Portal = exports.Fragment = void 0;

var _flags = require("./flags");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Fragment = Symbol();
exports.Fragment = Fragment;
var Portal = Symbol();
exports.Portal = Portal;

function h(tag) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  // 确定 flags?
  var flags = null;

  if (typeof tag === 'string') {
    //标签
    flags = tag === 'svg' ? _flags.VNodeFlags.ELEMENT_SVG : _flags.VNodeFlags.ELEMENT_HTML;
  } else if (tag === Fragment) {
    //
    flags = _flags.VNodeFlags.FRAGMENT;
  } else if (tag === Portal) {
    /**可以被到处挂载的 Fragment */
    flags = _flags.VNodeFlags.PORTAL;
    tag = data && data.target; // console.log(tag); 
  } else {
    // console.log( tag);
    // 兼容 Vue2 的对象式组件
    if (tag !== null && _typeof(tag) === 'object') {
      // console.log(tag);
      // flags = tag.functional
      flags = tag.functional ? _flags.VNodeFlags.COMPONENT_FUNCTIONAL // 函数式组件
      : _flags.VNodeFlags.COMPONENT_STATEFUL_NORMAL; // 有状态组件
    } else if (typeof tag === 'function') {
      flags = tag.prototype && tag.prototype.render ? _flags.VNodeFlags.COMPONENT_STATEFUL_NORMAL // 有状态组件
      : _flags.VNodeFlags.COMPONENT_FUNCTIONAL;
    }
  }

  var childFlags = null;

  if (Array.isArray(children)) {
    var _children = children,
        length = _children.length;

    if (length === 0) {
      childFlags = _flags.ChildrenFlags.NO_CHILDREN;
    } else if (length === 1) {
      childFlags = _flags.ChildrenFlags.SINGLE_VNODE;
      children = children[0];
    } else {
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
  var newChildren = []; // 遍历 children

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.key == null) {
      // 如果原来的 VNode 没有key，则使用竖线(|)与该VNode在数组中的索引拼接而成的字符串作为key
      child.key = '|' + i;
    }

    newChildren.push(child);
  } // 返回新的children，此时 children 的类型就是 ChildrenFlags.KEYED_VNODES


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
},{"./flags":"src/flags.js"}],"src/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _flags = require("./flags");

function render(vnode, container) {
  var prevVNode = container.vnode; // console.log(prevVNode);

  if (prevVNode == null) {
    if (vnode) {
      // 没有旧的 VNode，使用 `mount` 函数挂载全新的 VNode
      mount(vnode, container); // 将新的 VNode 添加到 container.vnode 属性下，这样下一次渲染时旧的 VNode 就存在了

      container.vnode = vnode;
    }
  }
}

function mount(vnode, container, isSVG) {
  var flags = vnode.flags;

  if (flags & _flags.VNodeFlags.ELEMENT) {
    mountElement(vnode, container, isSVG);
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

function mountElement(vnode, container, isSVG) {
  console.log(vnode.flags);
  isSVG = isSVG || vnode.flags & _flags.VNodeFlags.ELEMENT_SVG;
  var el = isSVG ? document.createElementNS('http://www.w3.org/2000/svg', vnode.tag) : document.createElement(vnode.tag);
  vnode.el = el;
  var data = vnode.data;

  if (data) {
    for (var key in data) {
      switch (key) {
        case 'style':
          for (var k in data.style) {
            el.style[k] = data.style[k];
          }

          break;

        default:
          break;
      }
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

  container.appendChild(el);
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
  var instance = new vnode.tag(); // 渲染VNode

  instance.$vnode = instance.render(); // 挂载

  mount(instance.$vnode, container, isSVG); // el 属性值 和 组件实例的 $el 属性都引用组件的根DOM元素

  instance.$el = vnode.el = instance.$vnode.el;
}

function mountText(vnode, container) {
  var el = document.createTextNode(vnode.children);
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
      var placeholder = createTextVNode('');
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
      childFlags = vnode.childFlags; // 获取挂载点

  var target = typeof tag === 'string' ? document.querySelector(tag) : tag;

  if (childFlags & _flags.ChildrenFlags.SINGLE_VNODE) {
    // 将 children 挂载到 target 上，而非 container
    mount(children, target);
  } else if (childFlags & _flags.ChildrenFlags.MULTIPLE_VNODES) {
    for (var i = 0; i < children.length; i++) {
      // 将 children 挂载到 target 上，而非 container
      mount(children[i], target);
    }
  }
}
},{"./flags":"src/flags.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _h = require("./h");

var _render = _interopRequireDefault(require("./render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const fragmentVNode = h(Fragment, null, [h('h1'), h('h1')])
// console.log(fragmentVNode)
var elementVNode = (0, _h.h)('div', {
  style: {
    height: '100px',
    width: '100px',
    background: 'red'
  }
}, (0, _h.h)(_h.Portal, {
  target: '#portal-box'
}, [(0, _h.h)('span', null, '我是标题1......'), (0, _h.h)('span', null, '我是标题2......')])); // console.log(elementVNode)

(0, _render.default)(elementVNode, document.getElementById('app')); // class MyComponent {
//   render() {
//     return h(
//       'div',
//       {
//         style: {
//           background: 'green'
//         }
//       },
//       [
//         h('span', null, '我是组件的标题1......'),
//         h('span', null, '我是组件的标题2......')
//       ]
//     )
//   }
// }
// const compVnode = h(MyComponent)
// render(compVnode, document.getElementById('app'))
// 函数式组件挂载
// function MyFunctionalComponent() {
//   // 返回要渲染的内容描述，即 VNode
//   return h(
//     'div',
//     {
//       style: {
//         background: 'green'
//       }
//     },
//     [
//       h('span', null, '我是组件的标题1......'),
//       h('span', null, '我是组件的标题2......')
//     ]
//   )
// }
// const compVnode = h(MyFunctionalComponent)
// console.log(compVnode)
// // 旧的 VNode
// const prevVNode = h('div', null, [
//   h('p', null, '旧的子节点1'),
//   h('p', null, '旧的子节点2')
// ]);
// // 新的 VNode
// const nextVNode = h('div', null, [
//   h('p', null, '新的子节点1'),
//   h('p', null, '新的子节点2'),
//   h('p', null, '新的子节点3')
// ])
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50746" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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