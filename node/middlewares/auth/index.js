const Koa = require("koa");
const app = new Koa();
const routing = require("./routes");
routing(app);
app.listen(3000, () => console.log("程序启动在3000端口了"));