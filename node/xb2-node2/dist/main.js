"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./app/index"));
const mysql_1 = require("./app/database/mysql");
index_1.default.listen(3000, () => {
    console.log("服务已启动");
});
mysql_1.connection.connect((e) => {
    if (e) {
        console.log(`连接数据服务失败：${e.message}`);
        return;
    }
    console.log(`成功连接数据服务 ~~`);
});
//# sourceMappingURL=main.js.map