<template>
  <div class="about">
    <input type="text" v-focus/>
    <div v-change-color="color">{{message}}</div>
  </div>
</template>
<script>
// directive 
import Vue from 'vue';
Vue.directive("change-color",function(el,binding,vnode){
  console.log(el, binding, vnode);
  el.style["color"]= binding.value;
})

Vue.directive('focus', {
          // 当绑定元素插入到 DOM 中。
  inserted: function (el,binding) {
        // 聚焦元素
        el.focus();
  }
});


export default {
  data(){
    return{
      color:'green',
      message: '吃饭了'
    }
  },
  mounted() {
    setTimeout(() => {
      this.color = 'yellow';
    },1000)
  }
}
</script>
