<template>
  <div id="app">
    <div>
      <input
        type="file"
        @change="handleFileChange"
      />
      <el-button @click="handleUpload"
        >上传</el-button>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  handleFileChange(e) {
    const [file] = e.target.files;
    if (!file) return;
    this.container.file = file;
  },
  async handleUpload() {
    if (!this.container.file) return;
    this.status = Status.uploading;
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
