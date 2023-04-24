"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var mysql2_1 = require("mysql2");
var app_config_1 = require("../../app/app.config");
/**
 * 创建数据服务连接
 */
exports.connection = mysql2_1.default.createConnection({
    host: app_config_1.MYSQL_HOST,
    port: parseInt(app_config_1.MYSQL_PORT, 10),
    user: app_config_1.MYSQL_USER,
    password: app_config_1.MYSQL_PASSWORD,
    database: app_config_1.MYSQL_DATABASE
});
