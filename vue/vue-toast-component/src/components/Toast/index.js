import vue from 'vue'

// 这里就是我们刚刚创建的那个静态组件
import toastComponent from './toast.vue'

// 返回一个 扩展实例构造器
const ToastConstructor = vue.extend(toastComponent)
let toastDom = null
let timer = null
// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
function showToast(msg, duration = 2000) {
  if (toastDom) {
    // 更新操作
    toastDom.visible = true
    toastDom.msg = msg
    if (timer) {
      clearTimeout(timer)
    }
  } else {
    // 新建的操作
    // 实例化一个 toast.vue
    toastDom = new ToastConstructor({
      el: document.createElement('div'),
      propsData: {
        msg: msg,
        visible: true
      }
    })
    // 把 实例化的 toast.vue 添加到 body 里
    document.body.appendChild(toastDom.$el)
  }
  console.log(toastDom);
  // 过了 duration 时间后隐藏
  timer = setTimeout(() => {
    toastDom.visible = false;
    document.body.removeChild(toastDom.$el)
    toastDom = null
  }, duration);
}

// 注册为全局组件的函数
function registryToast() {
  // 将组件注册到 vue 的 原型链里去,
  // 这样就可以在所有 vue 的实例里面使用 this.$toast()
  vue.prototype.$toast = showToast
}

export default registryToast
export const myAlert = showToast;
