<template>
  <div class="container">
    <div>
      <ul class="red">
        <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <child :send-msg="myMsg" :send-num="myNum" :send-obj="myObj"></child>
  </div>
</template>
<script>
import child from "./child.vue"
export default {
  name: "f2",
  data() {
    return {
      myMsg: "我是父组件的信息",
      myNum: 123,
      myObj: [
        {
          id: 1,
          name: "张三"
        },
        {
          id: 2,
          name: "李四"
        }
      ]
    };
  },
  components: {
    child
  }
};
</script>
<style>
</style>
