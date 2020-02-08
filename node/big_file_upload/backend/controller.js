const path = require("path");
const fse = require("fs-extra");
const extractExt = filename =>
  filename.slice(filename.lastIndexOf("."), filename.length);
  const UPLOAD_DIR = path.resolve(__dirname, "..", "target");
  
const resolvePost = req =>
  new Promise(resolve => {
    let chunk = "";
    req.on("data", data => {
      chunk += data;
    });
    req.on("end", () => {
      console.log('end', chunk);
      resolve(JSON.parse(chunk));
    });
  });

const createUploadedList = async fileHash =>
  fse.existsSync(path.resolve(UPLOAD_DIR, fileHash))
    ? await fse.readdir(path.resolve(UPLOAD_DIR, fileHash))
    : [];

module.exports = class {
  async handleVerifyUpload(req, res) {
    // res.end('sss')
    const data = await resolvePost(req);
    // console.log(data);
    const { fileHash, filename } = data;
    const ext = extractExt(filename);
    console.log(ext);
    const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`);
    if (fse.existsSync(filePath)) {
      res.end(
        JSON.stringify({
          shouldUpload: false
        })
      );
    } else {
      res.end(
        JSON.stringify({
          shouldUpload: true,
          uploadedList: await createUploadedList(fileHash)
        })
      );
    }

    // console.log(fileHash, filename, '_______');
  }
}