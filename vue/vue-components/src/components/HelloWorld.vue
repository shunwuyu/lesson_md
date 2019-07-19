<template>
  <div class="hello">
    <i-menu></i-menu>
    <i-button size="large" @click.native="handle">按钮1</i-button>
    <i-button disabled id="btn1" class="btn-submit">按钮2</i-button>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  name: 'HelloWorld',
  // provide: {
  //   name: 'Aresn'
  // },
  provide () {
    return {
      name: this.obj
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow: false,
      name: 'Aresn',
      obj: {
        name: 'snail'
      }
    }
  },
  components: {
    'i-button': button,
    'i-menu': menu
  },
  methods: {
    handle (val) {
      // console.log(val)
      // this.obj.name = '蜗牛'
      this.$toast('提交成功', 'bottom')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
