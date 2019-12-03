function proxyPolyfill() {
  ProxyPolyfill = function (target, handler) {
    // 函数 最后 被 new 调用
    // this 指向实例
    let proxy = this;

    const getter = handler.get ? function (prop) {
      return handler.get(this, prop, proxy);
    } : function (prop) {
      return this[prop];
    };
    // 如果存在 set 要劫持 set 的话，就让你 自定义一个 set
    // 如果 没有 set 咋也不能 把 set 这个行为 丢了吧
    // 自己 别忘了 设置一下 
    const setter = handler.set ? function (prop, value) {
      const status = handler.set(this, prop, value, proxy);
    } : function (prop, value) {
      this[prop] = value;
    };

    const propertyNames = Object.getOwnPropertyNames(target);
    propertyNames.forEach(function(prop) {
      const real = Object.getOwnPropertyDescriptor(target, prop);
      const desc = {
        enumerable: !!real.enumerable,
        get: getter.bind(target, prop),
        set: setter.bind(target, prop),
      };
      Object.defineProperty(proxy, prop, desc);
    });

    return proxy;

  }
  return ProxyPolyfill;
}
window.ProxyA = proxyPolyfill();