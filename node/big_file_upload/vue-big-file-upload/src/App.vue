<template>
  <div id="app">
    <div>
      <input
        type="file"
        @change="handleFileChange"
      />
      <el-button @click="handleUpload">上传</el-button
      >
    </div>
  </div>
</template>

<script>
const SIZE = 10 * 1024 * 1024;

const Status = {
  wait: "wait",
  pause: "pause",
  uploading: "uploading"
};

export default {
  name: 'app',
  
  data: () => ({
    container: {
      file: null,
      hash: "",
      status: Status.wait,
    }
  }),
  methods: {
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      this.container.file = file;

    },
    async handleUpload () {
      if (!this.container.file) return;
      this.status = Status.uploading; // 上传状态
      const fileChunkList = this.createFileChunk(this.container.file);
      this.container.hash = await this.calculateHash(fileChunkList);
    },
    createFileChunk(file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    },
    calculateHash(fileChunkList) { 
      return new Promise(resolve => {
        this.container.worker = new Worker("/hash.js");
        this.container.worker.postMessage({ fileChunkList });
        this.container.worker.onmessage = e => {
          console.log(e.data);
        }
      })
    }
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
