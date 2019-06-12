<template>
  <div class="container">
    <h2>父组件</h2>
    <div>
      <ul class="red">
        <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <child :send-obj="myObj"></child>
  </div>
</template>
<script>
import child from "./Child.vue";
export default {
  name: "f3",
  data() {
    const obj = {
      myObj: []
    };
    // 模拟异步获取数据
    setTimeout(() => {
      obj["myObj"] = [
        {
          id: 1,
          name: "张三"
        },
        {
          id: 2,
          name: "李四"
        }
      ];
    }, 1000);
    return obj;
  },
  components: {
    child
  }
};
</script>
<style>
</style>
