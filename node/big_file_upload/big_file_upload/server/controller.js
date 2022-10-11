const resolvePost = req =>
  new Promise(resolve => {
    let chunk = "";
    req.on("data", data => {
      chunk += data;
    });
    req.on("end", () => {
      console.log( typeof chunk, chunk);
      resolve(JSON.parse(chunk));
    });
  });

module.exports = class {
  async handleVerifyUpload(req, res) {
    const data = await resolvePost(req);
    console.log(data);
    // const { fileHash, filename } = data;
    // const ext = extractExt(filename);
    // const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`);

    // if (fse.existsSync(filePath)) {
    //   res.end(
    //     JSON.stringify({
    //       shouldUpload: false
    //     })
    //   );
    // } else {
    //   res.end(
    //     JSON.stringify({
    //       shouldUpload: true,
    //       uploadedList: await createUploadedList(fileHash)
    //     })
    //   );
    // }
  }
}