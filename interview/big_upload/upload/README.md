- 添加element-ui
- data return  它用键头函数搞定了
  data: () => ({
    container: {
      file: null
    }
  })
- 上传文件处理函数
  handleFileChange  只取第一个文件
  const [file] = e.target.files; 用解构写的很牛逼
  ? Object.assign
- 
