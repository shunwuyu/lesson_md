self.onmessage = e => {
  const { fileChunkList } = e.data;
  console.log(fileChunkList);
}