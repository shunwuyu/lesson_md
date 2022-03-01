"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const app_config_1 = require("../../app/app.config");
exports.connection = mysql2_1.default.createConnection({
    host: app_config_1.MYSQL_HOST,
    port: parseInt(app_config_1.MYSQL_PORT, 10),
    user: app_config_1.MYSQL_USER,
    password: app_config_1.MYSQL_PASSWORD,
    database: app_config_1.MYSQL_DATABASE
});
//# sourceMappingURL=mysql.js.map