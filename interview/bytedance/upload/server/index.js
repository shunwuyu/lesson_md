const Controller = require("./controller");
const http = require("http");
const path = require("path");
const fse = require("fs-extra");
const multiparty = require("multiparty");
const UPLOAD_DIR = path.resolve(__dirname, "..", "target");
console.log(UPLOAD_DIR)
const server = http.createServer();
const controller = new Controller();

const extractExt = filename =>
  filename.slice(filename.lastIndexOf("."), filename.length);

const resolvePost = req => {
    return new Promise(resolve => {
        let chunk = "";
        req.on("data", data => {
            chunk += data;
        })
        req.on("end", () => {
            resolve(JSON.parse(chunk));
        })
    })
}

const pipeStream = (path, writeStream) => {
    return new Promise(resolve => {
        const readStream = fse.createReadStream(path);
        readStream.on("end", () => {
            fse.unlinkSync(path);
            resolve();
        })
    })
}


const mergeFileChunk = async (filePath, filename, size) => {
    const chunkDir = path.resolve(UPLOAD_DIR, 'chunkDir' + filename);
    const chunkPaths = await fse.readdir(chunkDir);
    // console.log(chunkPaths)
    chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
    await Promise.all(
        chunkPaths.map((chunkPath, index) =>
            pipeStream(
                path.resolve(chunkDir, chunkPath),
                fse.createWriteStream(filePath, {
                    start: index * size,
                })    
            )
        )
    )
    fse.rmdirSync(chunkDir);
}


server.on("request", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    // 与head类似，是客户端用于查看服务器的性能 。
    // JavaScript的XMLHttpRequest对象进行CORS
    // 跨域资源共享时，就是使用OPTIONS方法发送
    // 嗅探请求，以判断是否有对指定资源的访问权限
    if (req.method === "OPTIONS") {
        res.status = 200;
        res.end();
        return;
    }

    const multipart = new multiparty.Form();
    multipart.parse(req, async (err, fields, files) => {
        if (err) {
            return;
        }
        const [chunk] = files.chunk;
        const [hash] = fields.hash;
        const [filename] = fields.filename;
        const chunkDir = path.resolve(UPLOAD_DIR, 'chunkDir' + filename);
        if (!fse.existsSync(chunkDir)) {
            await fse.mkdirs(chunkDir);
        }
        await fse.move(chunk.path, `${chunkDir}/${hash}`);
        res.end("received file chunk");
        console.log(chunk)
    })

    if (req.url === "/merge") {
        const data = await resolvePost(req);
        const { fileHash, filename, size } = data;
        const ext = extractExt(filename);
        const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`);
        await mergeFileChunk(filePath, fileHash, size);
        res.end(
            JSON.stringify({
                code: 0,
                message: "file merged success"
            })
        );
        // await controller.handleMerge(req, res);
        // return;
    }

    if (req.url === "/") {
        await controller.handleFormData(req, res);
    }
})
server.listen(8888, () => console.log("listening port 3000"));
