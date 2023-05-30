<template>
  <div id="app">
    <h1>测试</h1>
    <input type="file" @change="handleFileChange" />
    <el-button type="primary" @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
import { request, post } from "./util"
import SparkMD5 from "spark-md5"
const SIZE = 0.2 * 1024 * 1024;
const Status = {
  wait: "wait",
  pause: "pause",
  uploading: "uploading",
  error: "error",
  done: "done",
};

export default {
  name: 'App',
  data: () => ({
    container: {
      file: null,
      status: Status.wait
    },
  }),
  methods: {
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      this.container.file = file;
    },
    async handleUpload() {
      if (!this.container.file) return;
      this.status = Status.uploading;
      const chunks = this.createFileChunk(this.container.file);
      console.log(chunks);
      console.time("samplehash");
      // 这样抽样，大概1个G1秒，如果还嫌慢，可以考虑分片+web-worker的方式
      // 这种方式偶尔会误判 不过大题效率不错
      // 可以考虑和全部的hash配合，因为samplehash不存在，就一定不存在，存在才有可能误判，有点像布隆过滤器
      this.container.hash = await this.calculateHashSample();
      console.log(this.container.hash);
      console.timeEnd("samplehash");
      const { uploaded, uploadedList } = await this.verify(
        this.container.file.name,
        this.container.hash
      );
      
      this.chunks = chunks.map((chunk, index) => {
        const chunkName = this.container.hash + "-" + index;
        return {
          fileHash: this.container.hash,
          chunk: chunk.file,
          index,
          hash: chunkName,
          progress: uploadedList.indexOf(chunkName) > -1 ? 100 : 0,
          size: chunk.file.size
        };
      });
      // console.log(this.chunks);
      await this.uploadChunks(uploadedList);
    },
    async uploadChunks(uploadedList = []) {
      const list = this.chunks
        .filter(chunk => uploadedList.indexOf(chunk.hash) == -1)
        .map(({ chunk, hash, index }, i) => {
          const form = new FormData();
          form.append("chunk", chunk);
          form.append("hash", hash);
          form.append("filename", this.container.file.name);
          form.append("fileHash", this.container.hash);
          return { form, index,status:Status.wait };
        })
        // .map(({ form, index }) =>
        //   request({
        //     url: "/upload",
        //     data: form,
        //     onProgress: this.createProgresshandler(this.chunks[index]),
        //     requestList: this.requestList
        //   })
        // );
      // await Promise.all(list);
      try{
        const ret =  await this.sendRequest(list,4)
        if (uploadedList.length + list.length === this.chunks.length) {
          // 上传和已经存在之和 等于全部的再合并
          await this.mergeRequest();
        }
      }catch(e){
        // 上传有被reject的
         this.$message.error('亲 上传失败了,考虑重试下呦');

      }
    },
    async sendRequest(urls, max=4,retrys=3) {
      // console.log(urls,max)
      
    },
    createFileChunk(file, size = SIZE) {
      const chunks = [];
      let cur = 0;
      while ( cur < file.size ) {
        chunks.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return chunks;
    },
    async calculateHashSample() {
      return new Promise(resolve => {
        const spark = new SparkMD5.ArrayBuffer();
        const reader = new FileReader();
        const file = this.container.file;
        // 文件大小
        const size = this.container.file.size;
        let offset = 2 * 1024 * 1024;
        let chunks = [file.slice(0, offset)];

        let cur = offset;
        while (cur < size) {
          // 最后一块全部加进来
          if (cur + offset >= size) {
            chunks.push(file.slice(cur, cur + offset));
          } else {
            // 中间的 前中后去两个子杰
            const mid = cur + offset / 2;
            const end = cur + offset;
            chunks.push(file.slice(cur, cur + 2));
            chunks.push(file.slice(mid, mid + 2));
            chunks.push(file.slice(end - 2, end));
          }
          // 前取两个子杰
          cur += offset;
        }
        // 拼接
        reader.readAsArrayBuffer(new Blob(chunks));

        // 最后100K
        reader.onload = e => {
          spark.append(e.target.result);

          resolve(spark.end());
        };
      })
    },
    async verify(filename, hash) {
      const data = await post("/verify", { filename, hash });
      return data;
    },
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
