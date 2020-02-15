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
  async handleFormData(req, res) {
    const multipart = new multiparty.Form();
    multipart.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status = 500; //500服务器内部错误（Internal server error
        res.end("process file chunk failed");
        return;
      }

      const [chunk] = files.chunk;
      const [hash] = fields.hash;
      const [fileHash] = fields.fileHash;
      const [filename] = fields.filename;
      const filePath = path.resolve(
        UPLOAD_DIR,
        `${fileHash}${extractExt(filename)}`
      );
      const chunkDir = path.resolve(UPLOAD_DIR, fileHash);

      if (fse.existsSync(filePath)) {
        res.end("file exist");
        return;
      }

      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir);
      }

      await fse.move(chunk.path, path.resolve(chunkDir, hash));
      res.end("received file chunk");
    })
  }
}