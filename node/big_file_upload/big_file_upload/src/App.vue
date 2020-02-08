<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>
<script>
const SIZE = 1 * 1024 * 1024;
export default {
  data: () => ({
    container: {
      file: null
    },
    data: []
  }),
  methods: {
    handleFileChange (e) {
      const [file] = e.target.files;
      if (!file) return;
      // console.log(file);  
      this.container.file = file;
    },
    request({
      url,
      method = "post",
      data,
      headers = {},
      requestList
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = e => {
          resolve({
            data: e.target.response
          });
        };
      });
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
    async handleUpload () {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      console.log(fileChunkList);
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + "-" + index
      }));
      await this.uploadChunks();
    },
    async uploadChunks () {
      const requestList = this.data
        .map(({ chunk, hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          return { formData };
        })
        .map(async ({ formData }) =>
          this.request({
            url: "http://localhost:3000",
            data: formData
          })
        );
      await Promise.all(requestList);
      await this.mergeRequest();
    },
    async mergeRequest () {
      await this.request({
        url: "http://localhost:3000/merge",
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
          filename: this.container.file.name
        })
      });
    }
  }
}
</script>