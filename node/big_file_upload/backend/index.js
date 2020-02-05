const Controller = require("./controller");
const http = require("http");
const server = http.createServer();

const controller = new Controller();

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }
  if (req.url == "/verify") {
    // res.end('hello');
    await controller.handleVerifyUpload(req, res);
    return;
  }
});

server.listen(3000, () => console.log("正在监听 3000 端口"));