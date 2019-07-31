const express = require("express");
const fs = require("fs");
const path = require("path");
const ServerRenderer = require("./renderer");
const app = express();

const isProd = process.env.NODE_ENV === "production";

let renderer;
let readyPromise;
let template = fs.readFileSync("./index.html", "utf-8");
if (isProd) {
  // 静态资源映射到dist路径下
  app.use("/dist", express.static(path.join(__dirname, "../dist")));

  let bundle = require("../dist/server-bundle.json");
  let stats = require("../dist/loadable-stats.json");
  renderer = new ServerRenderer(bundle, template, stats);
} else {
  readyPromise = require("./dev-server")(app, (
    bundle,
    stats) => {
      renderer = new ServerRenderer(bundle, template, stats);
  });
}

app.use("/public", express.static(path.join(__dirname, "../public")));

const render = (req, res) => {
  console.log("======enter server======");
  console.log("visit url: " + req.url);

  // 此对象会合并然后传给服务端路由，不需要可不传
  const context = {};

  renderer.renderToString(req, context).then(({error, html}) => {
    if (error) {
      if (error.url) {
        res.redirect(error.url);
      } else if (error.code) {
        res.status(error.code).send("error code：" + error.code);
      }
    }
    res.send(html);
  }).catch(error => {
    console.log(error);
    res.status(500).send("Internal server error");
  });
}

app.get("*", isProd ? render : (req, res) => {
  // 等待客户端和服务端打包完成后进行render
	readyPromise.then(() => render(req, res));
});

app.listen(3000, () => {
  console.log("Your app is running");
});
