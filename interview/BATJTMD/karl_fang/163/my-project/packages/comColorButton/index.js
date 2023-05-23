// 导入组件，组件必须声明 name
import ComColorButton from './src/color-button.vue'

// 为组件提供 install 安装方法，供按需引入
ComColorButton.install = function (Vue) {
  Vue.component(ComColorButton.name, ComColorButton)
}

// 默认导出组件
export default ComColorButton
