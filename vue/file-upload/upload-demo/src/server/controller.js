const fse = require("fs-extra")
const path = require('path')
const { resolvePost, extractExt, getUploadedList } = require('./util')

class Controller {
    constructor(uploadDir) {
      this.UPLOAD_DIR = uploadDir
    }
    async handleVerify(req, res) {
        const data = await resolvePost(req)
        // console.log(data)
        const { filename, hash } = data
        const ext = extractExt(filename)
        const filePath = path.resolve(this.UPLOAD_DIR, `${hash}${ext}`)
        // 文件是否存在
        let uploaded = false
        let uploadedList = []
        if (fse.existsSync(filePath)) {
            uploaded = true
        }else{
            // 文件没有完全上传完毕，但是可能存在部分切片上传完毕了
            uploadedList = await getUploadedList(path.resolve(this.UPLOAD_DIR, hash))
        }
        res.end(
            JSON.stringify({
              uploaded,
              uploadedList // 过滤诡异的隐藏文件
            })
        )
    }
}

module.exports = Controller