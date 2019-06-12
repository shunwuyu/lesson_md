<template>
  <div class="child">
    <h2>子组件</h2>
    <p>从父组件接收到的数据是：</p>
    <div>
      string:<span class="red">{{sendMsg}}</span>
    </div>
    <div>
      number:<span class="red">{{sendNum}}</span>
    </div>
    <p>object:</p>
    <div>
      <ul class="red">
        <li v-for="item in sendObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div>

    <h2>子组件是否影响父组件</h2>
    <input type="text" v-model="sendMsg">
    <div>
      <ul class="blue">
        <li v-for="item in list" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "c2",
  props: {
    sendMsg: {
      type: String,
      required: true
    },
    sendNum: {
      type: Number,
      required: false
    },
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
    return {};
  },
  created () {
    console.log(this.sendMsg, this.sendNum, this.sendObj)
  },
  computed: {
    list() {
      // const copyObj = this.sendObj;
      // 复制一份数据，防止引用类型数据污染父组件数据
      const copyObj = JSON.parse(JSON.stringify(this.sendObj)); // 父组件传进来的值不能直接修改
      copyObj.push({
        id: 3,
        name: "蜗牛"
      });
      return copyObj;
    }
  }
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
}
</style>
