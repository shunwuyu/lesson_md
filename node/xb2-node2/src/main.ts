import app from "./app/index";
import { connection } from "./app/database/mysql";

app.listen(3000, () => {
  console.log("服务已启动");
});

//数据服务连接
connection.connect((e) => {
  if (e) {
    console.log(`连接数据服务失败：${e.message}`);
    return;
  }
  console.log(`成功连接数据服务 ~~`);
});