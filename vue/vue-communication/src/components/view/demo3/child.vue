<template>
  <div class="child">
    <h3>子组件</h3>
    <div>
      <ul class="red">
        <li v-for="item in list" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "c3",
  props: {
    sendObj: {
      // 声明验证类型
      validator(val) {
        if (
          Object.prototype.toString.call(val) === "[object Array]" ||
          Object.prototype.toString.call(val) === "[object object]"
        ) {
          return true;
        }
      }
    }
  },
  data() {
    return {
      list: []
    };
  },
  watch: {
    sendObj(newVal, oldVal) {
      if (newVal !== oldVal) {
        const data = JSON.parse(JSON.stringify(newVal));
        data.push({
          id: 3,
          name: "蜗牛"
        });
        this.list = data;
      }
    }
  },
  computed: {}
};
</script>

<style>
.red {
  color: rgba(255, 0, 0, 0.678);
}
.blue {
  color: rgba(0, 0, 255, 0.781);
}
.child {
  border: 1px solid #71b92e;
  background-color: #eee;
}
</style>
