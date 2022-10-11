<template>
  <div id="app">
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => ({
    container: {
      file: null
    }
  }),
  methods: {
    handleFileChange(e) {
      console.log(this.$data);
      const [file] = e.target.files;
      if (!file) return;
      Object.assign(this.$data, this.$options.data())
      this.container.file = file
    },
    async handleUpload() {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
