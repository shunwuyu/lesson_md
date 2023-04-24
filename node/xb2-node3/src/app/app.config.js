"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALLOW_ORIGIN = exports.MYSQL_DATABASE = exports.MYSQL_PASSWORD = exports.MYSQL_USER = exports.MYSQL_PORT = exports.MYSQL_HOST = exports.APP_PORT = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
exports.APP_PORT = process.env.APP_PORT;
/**
 * 数据仓库配置
 */
exports.MYSQL_HOST = (_a = process.env, _a.MYSQL_HOST), exports.MYSQL_PORT = _a.MYSQL_PORT, exports.MYSQL_USER = _a.MYSQL_USER, exports.MYSQL_PASSWORD = _a.MYSQL_PASSWORD, exports.MYSQL_DATABASE = _a.MYSQL_DATABASE;
exports.ALLOW_ORIGIN = process.env.ALLOW_ORIGIN;
