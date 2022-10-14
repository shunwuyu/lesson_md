"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_router_1 = __importDefault(require("../post/post.router"));
const app = express_1.default();
app.use(post_router_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map