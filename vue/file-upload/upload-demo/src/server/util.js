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