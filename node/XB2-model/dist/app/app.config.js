"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLIC_KEY = exports.PRIVATE_KEY = exports.MYSQL_DATABASE = exports.MYSQL_PASSWORD = exports.MYSQL_USER = exports.MYSQL_PORT = exports.MYSQL_HOST = exports.APP_PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.APP_PORT = process.env.APP_PORT;
_a = process.env, exports.MYSQL_HOST = _a.MYSQL_HOST, exports.MYSQL_PORT = _a.MYSQL_PORT, exports.MYSQL_USER = _a.MYSQL_USER, exports.MYSQL_PASSWORD = _a.MYSQL_PASSWORD, exports.MYSQL_DATABASE = _a.MYSQL_DATABASE;
_b = process.env, exports.PRIVATE_KEY = _b.PRIVATE_KEY, exports.PUBLIC_KEY = _b.PUBLIC_KEY;
exports.PRIVATE_KEY = Buffer.from(exports.PRIVATE_KEY, 'base64').toString();
exports.PUBLIC_KEY = Buffer.from(exports.PUBLIC_KEY, 'base64').toString();
//# sourceMappingURL=app.config.js.map