"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_router_1 = __importDefault(require("../post/post.router"));
const auth_middleware_1 = require("../auth/auth.middleware");
const app_middleware_1 = require("./app.middleware");
const auth_router_1 = __importDefault(require("../auth/auth.router"));
const user_router_1 = __importDefault(require("../user/user.router"));
const app = express_1.default();
app.use(auth_middleware_1.currentUser);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express_1.default.json());
app.use(post_router_1.default, auth_router_1.default, user_router_1.default);
app.use(app_middleware_1.defaultErrorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map