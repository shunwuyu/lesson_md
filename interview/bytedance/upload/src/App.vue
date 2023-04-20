<script setup>
import { reactive, ref } from 'vue'
const state = reactive({
  file: null,
  data: []
})
const SIZE = 10 * 1024 * 1024; 

const handleFileChange = (e) => {
  const [file] = e.target.files;
  if (!file) return;
  state.file = file
}
const request = ({ 
  url,
  method = "post",
  data,
  headers = {},
  onProgress = e => e,
  requestList
}) => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = onProgress;
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
  })
}
const createFileChunk = (file, size = SIZE) => { 
  console.log(file)
  const fileChunkList = [];
  let cur = 0;
  while (cur < file.size) {
    fileChunkList.push({ file: file.slice(cur, cur + size) });
    cur += size;
  }
  return fileChunkList;
}

const uploadChunks = async (uploadedList = []) => {
    const requestList = state.data
      .map(({ chunk, hash }) => {
        const formData = new FormData();
        formData.append("chunk", chunk);
        formData.append("hash", hash);
        formData.append("filename", state.file.name);
        formData.append("fileHash", state.hash);
        return { formData };
      })
      .map(({ formData }) =>
        request({
          url: "http://localhost:8888",
          data: formData
        })
      );
    await Promise.all(requestList);
    await mergeRequest();
  }

const handleUpload = async () => {
  if (!state.file) return;
  const fileChunkList = createFileChunk(state.file);
  // console.log(fileChunkList)
  state.data = fileChunkList.map(({file}, index) => ({
    chunk: file,
    hash: state.file.name + "-" + index
  }))
  await uploadChunks();
}

const mergeRequest = async () => {
  await request({
    url: "http://localhost:8888/merge",
    headers: {
      "content-type": "application/json"
    },
    data: JSON.stringify({
      filename: state.file.name
    })
  })
}
</script>

<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">upload</el-button>
  </div>
</template>

<style>

</style>
