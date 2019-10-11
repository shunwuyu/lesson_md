import Vue from 'vue';
import Message from './components/Message';
const components = [
  Message
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = Message;
  // console.log(Vue.prototype.$message);
}


export default {
  install
}