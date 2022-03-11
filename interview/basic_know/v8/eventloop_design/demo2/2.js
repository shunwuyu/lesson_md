if (!window.setImmediate) {
  window.setImmediate = function(func, args){
    return window.setTimeout(func, 0, args);
  };
  // 记得清除
  window.clearImmediate = window.clearTimeout;
}