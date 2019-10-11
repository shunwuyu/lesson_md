let vLoading = {};
const loadingNode = document.createElement('div');
loadingNode.className = 'loading'
function toggleLoading(el, binding) {
  if (binding.value) {
    el.appendChild(loadingNode);
  } else {
    el.contains(loadingNode) && el.removeChild(loadingNode);
  }
}
const vLoadingOpt = {
  bind: function(el, binding) {
    // console.log(el, binding);
    toggleLoading(el, binding);
    // el.appendChild(loadingNode);
  },
  unbind: function(el) {
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding);
    }
  },
}
vLoading.install = function(Vue) {
  Vue.directive('loading', vLoadingOpt);
}
if (typeof exports == 'object') {
  module.exports = vLoading;
} else if (window.Vue) {
  window.vLoading = vLoading;
  Vue.use(vLoading);
}