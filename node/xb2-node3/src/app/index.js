"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var app_config_1 = require("./app.config");
var post_router_1 = require("../post/post.router");
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: app_config_1.ALLOW_ORIGIN,
    exposedHeaders: 'X-Total-Count',
}));
/**
 * 路由
 */
app.use(post_router_1.default);
exports.default = app;
