"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var app_config_1 = require("./app/app.config");
var mysql_1 = require("./app/database/mysql");
app_1.default.listen(app_config_1.APP_PORT, function () {
    console.log('🚀 服务已启动！');
});
mysql_1.connection.connect(function (error) {
    if (error) {
        console.log('👻 连接数据服务失败：', error.message);
        return;
    }
    console.log('🚛 成功连接数据服务 ~~');
});
