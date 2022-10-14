// https://blog.csdn.net/dj19983160703/article/details/88888728
var express = require('express');
var fs = require("fs");
var app = express();

app.use("/", function (req, res, next) {
  console.log("中间件执行");
  next();
})

app.get("/index", (req, res, next) => {
  fs.readFile("./aaa.text", "utf8", (err, data) => {
      if (err) next(err); //这里需要注意一点：next不加参数则交给下面的第一个匹配成功的，
      //next 加参数则交给下面第一个有err参数的
      res.send("index");
  })
})

app.use((req, res) => {
  res.send("404 Page NotFind");
})

app.use((err, req, res, next) => {
  res.send(err);
})


app.listen("8080", () => {
  console.log("服务器已经启动 http://localhost:8080");
})