"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALLOW_ORIGIN = exports.APP_PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.APP_PORT = process.env.APP_PORT;
exports.ALLOW_ORIGIN = process.env.ALLOW_ORIGIN;
//# sourceMappingURL=app.config.js.map