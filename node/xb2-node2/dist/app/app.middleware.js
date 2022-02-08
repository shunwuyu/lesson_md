"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
const defaultErrorHandler = (e, req, res, next) => {
    if (e.message) {
        console.log(`有异常，位置是在：${e.message}`);
    }
    let statusCode, message;
    switch (e.message) {
        case "NAME_IS_REQUIRED":
            statusCode = 400;
            message = "请提供用户名";
            console.log("缺少用户名");
            break;
        default:
            statusCode = 500;
            message = "服务暂时出了点问题 ~~ ";
            break;
    }
    res.status(statusCode).send({ message });
};
exports.defaultErrorHandler = defaultErrorHandler;
//# sourceMappingURL=app.middleware.js.map