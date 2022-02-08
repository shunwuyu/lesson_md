"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.connection = mysql2_1.default.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'blog',
});
//# sourceMappingURL=mysql.js.map