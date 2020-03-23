<template>
  <div class="about">
    <!-- <input type="text" ref="inputs"> -->

    <p ref="myWidth" v-if="showMe">{{ message }}</p>
    <button @click="getMyWidth">获取p元素宽度</button>
  </div>
</template>
<script>
// directive 



export default {
  data(){
    return{
      showMe: false,
      message : ''
    }
  },
  methods: {
    getMyWidth() {
      this.showMe = true;
      // this.message = this.$refs.myWidth.offsetWidth;
      this.$nextTick(()=>{
        //dom元素更新后执行，此时能拿到p元素的属性
        this.message = this.$refs.myWidth.offsetWidth;
      })
    }
  },
  mounted() { ////因为 mounted 阶段 dom 并未渲染完毕,所以需要$nextTick
  // 在下次 DOM 更新循环结束之后执行延迟回调 
  // 挂载之后：已完成HTML虚拟化，创建了el节点 可以操作DOM了
    // this.$nextTick(() => {
    //   this.$refs.inputs.focus() //通过 $refs 获取dom 并绑定 focus 方法
    // })
    this.$eventBus.$on("eventTarget",v=>{
      console.log('eventTarget',v);//这是eventTarget传过来的值
    })
  }
}
</script>
