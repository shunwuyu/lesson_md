function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  }
}
let vDebounce = {};
const vDebounceOpt = {
  bind: function(el, binding) {
    console.log(el, binding.value)
    el.addEventListener('click', debounce(binding.value, 2000));
  },
  unbind: function(el) {
  }
}
vDebounce.install = function(Vue) {
  Vue.directive('debounce', vDebounceOpt);
}
if (typeof exports == 'object') {
  module.exports = vDebounce;
} else if (window.Vue) {
  window.vDebounce = vDebounce;
  Vue.use(vDebounce);
}