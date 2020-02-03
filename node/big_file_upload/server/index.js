const http = require("http");
const path = require("path");
const fse = require("fs-extra");
const multiparty = require("multiparty");
const UPLOAD_DIR = path.resolve(__dirname, ".", "target");
const server = http.createServer();
server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const multipart = new multiparty.Form();
  const chunkDir = path.resolve(UPLOAD_DIR, 'BlueDream_4k.jpg');
  multipart.parse(req, async (err, fields, files) => {
    if (err) {
      return;
    }
    // console.log(files);
    const [chunk] = files.chunk;
    // console.log(chunk);
    const [filename] = fields.filename;
    // console.log(filename);
    if (!fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir);
    }
    // console.log(chunk.path, filename);
    await fse.move(chunk.path, `${chunkDir}/${filename}`);
    res.end("received file chunk");
  })
});

server.listen(3001, () => console.log("正在监听 3000 端口"));