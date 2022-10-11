const path = require("path");
const fse = require("fs-extra");

const UPLOAD_DIR = path.resolve(__dirname, ".", "target");
const filename = 'yb';
const filePath = path.resolve(UPLOAD_DIR, "..", `${filename}.jpeg`);

const pipeStream = (path, writeStream) =>
  new Promise(resolve => {
    const readStream = fse.createReadStream(path);
    readStream.on("end", () => {
      // fse.unlinkSync(path);
      resolve();
    });
    // console.log(path);
    readStream.pipe(writeStream);
  })

const mergeFileChunk = async (filePath, filename, size) => {
  const chunkDir = path.resolve(UPLOAD_DIR, filename);
  // console.log(filePath, chunkDir, '----');
  
  const chunkPaths = await fse.readdir(chunkDir);
  // console.log(chunkPaths);
  
  chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
  console.log(chunkPaths);
  await Promise.all(
    chunkPaths.map((chunkPath, index) =>
      pipeStream(
        path.resolve(chunkDir, chunkPath),
        fse.createWriteStream(filePath, {
          start: index * size,
          end: (index + 1) * size
        })
      )
    )
  )
  // fse.rmdirSync(chunkDir);
}

// console.log(filePath);
mergeFileChunk(filePath, filename, 0.5*1024*1024);