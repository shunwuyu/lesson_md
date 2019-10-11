<template>
  <div id="app">
    <el-button :plain="true" @click="openVn">
      VNode
    </el-button>
    <my-elrow tag="div" :jiange="20">
      <!-- 24 -->
      <my-elcol :span="4">
        col-1
      </my-elcol>
      <my-elcol :span="16" :offset="4">
        col-2
      </my-elcol>
    </my-elrow>
  </div>
</template>
<script>
import ElRow from './components/El-Row';
import ElCol from './components/El-Col';
export default {
  name: 'App',
  components: {
    'my-elrow': ElRow,
    'my-elcol': ElCol
  },
  methods: {
    openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          duration: 0
        });
      }
  }
}
</script>

<style>
* { margin: 0; padding: 0; }
</style>
