"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
const defaultErrorHandler = (error, request, response, next) => {
    if (error.message) {
        console.log('🚧', error.message);
    }
    let statusCode, message;
    switch (error.message) {
        default:
            statusCode = 500;
            message = '服务暂时出了点问题 ~~ 🌴';
            break;
    }
    response.status(statusCode).send({ message });
};
exports.defaultErrorHandler = defaultErrorHandler;
//# sourceMappingURL=app.middleware.js.map