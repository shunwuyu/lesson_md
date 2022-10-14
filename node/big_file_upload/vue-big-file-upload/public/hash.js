// self.onmessage = e => {
//   self.postMessage({
//     "msg": '你好'
//   });
// }
self.importScripts("/spark-md5.min.js");

self.onmessage = e => {
  const { fileChunkList  } = e.data;
  const spark = new self.SparkMD5.ArrayBuffer(); 
  //buffer 核心库 数据保存在buffer类中
  let percentage = 0;
  let count = 0;
  const loadNext = index => {
    const reader = new FileReader(); //文件对象
    reader.readAsArrayBuffer(fileChunkList[index].file);
    reader.onload = e => {
      count++;
      spark.append(e.target.result);
      if (count === fileChunkList.length) {
        self.postMessage({
          percentage: 100,
          hash: spark.end()
        });
        self.close();
      } else {
        percentage += 100 / fileChunkList.length;
        self.postMessage({
          percentage
        });
        loadNext(count);
      }
    };
  };
  loadNext(0);
}