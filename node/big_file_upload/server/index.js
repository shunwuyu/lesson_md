const http = require("http");
const path = require("path");
const fse = require("fs-extra");
const multiparty = require("multiparty");
const UPLOAD_DIR = path.resolve(__dirname, ".", "target");
const server = http.createServer();

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.url === "/") {
  
    const multipart = new multiparty.Form();
    
    multipart.parse(req, async (err, fields, files) => {
      if (err) {
        return;
      }
      
      // console.log(files);
      const [chunk] = files.chunk;
      // console.log(chunk);
      const [filename] = fields.filename;
      const dir_name = filename.split('-')[0];
      const chunkDir = path.resolve(UPLOAD_DIR, dir_name);
      // console.log(filename);
      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir);
      }
      // console.log(chunk.path, filename);
      await fse.move(chunk.path, `${chunkDir}/${filename}`);
      res.end("received file chunk");
    })
  }

  
});



server.listen(3001, () => console.log("正在监听 3000 端口"));