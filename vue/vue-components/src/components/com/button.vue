<template>
  <button :class="'i-button-size' + size" :disabled="disabled" @click="handleClick">
    <!-- 组件内部就可以扩展内容 -->
    <slot></slot>
  </button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
import bus from '@/common/bus'
export default {
  props: {
    size: {
      validator (value) { //其中 size 使用 validator 进行了值的自定义验证
        return oneOf(value, ['small', 'large', 'default']);
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      msg: '我是子组件button的数据'
    }
  },
  methods: {
    handleClick () {
      // console.log(event)
      // this.$emit('on-click', this.msg)
      bus.$emit('todo', this.msg)
    }
  }
}
</script>

<style scoped>
button{
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.i-button-sizelarge{
  padding: 12px;
}
.i-button-sizedefault{
  padding: 8px;
}
.i-button-sizesmall{
  padding: 4px;
}
</style>
