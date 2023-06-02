const fse = require("fs-extra")
exports.resolvePost = req =>
  new Promise(resolve => {
    let chunk = ""
    req.on("data", data => {
      chunk += data
    })
    req.on("end", () => {
      resolve(JSON.parse(chunk))
    })
  })

  exports.extractExt = filename => filename.slice(filename.lastIndexOf("."), filename.length)

  exports.getUploadedList = async (dirPath)=>{
    return fse.existsSync(dirPath) 
      ? (await fse.readdir(dirPath)).filter(name=>name[0]!=='.') // 过滤诡异的隐藏文件
      : []
  }

  const pipeStream = (filePath, writeStream) =>
  new Promise(resolve => {
    const readStream = fse.createReadStream(filePath)
    readStream.on("end", () => {
      // 删除文件
      fse.unlinkSync(filePath)
      resolve()
    })
    readStream.pipe(writeStream)
  })

  exports.mergeFiles = async (files,dest,size)=>{
    await Promise.all(
      files.map((file, index) =>
        pipeStream(
          file,
          // 指定位置创建可写流 加一个put避免文件夹和文件重名
          // hash后不存在这个问题，因为文件夹没有后缀
          // fse.createWriteStream(path.resolve(dest, '../', 'out' + filename), {
          fse.createWriteStream(dest, {
            start: index * size,
            end: (index + 1) * size
          })
        )
      )
    )
  
  }
  