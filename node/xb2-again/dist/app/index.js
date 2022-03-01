"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app_config_1 = require("./app.config");
const user_router_1 = __importDefault(require("../user/user.router"));
const app_middleware_1 = require("./app.middleware");
var bodyParser = require('body-parser');
const app = (0, express_1.default)();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: app_config_1.ALLOW_ORIGIN,
    exposedHeaders: 'X-Total-Count',
}));
app.use(user_router_1.default);
app.use(app_middleware_1.defaultErrorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map