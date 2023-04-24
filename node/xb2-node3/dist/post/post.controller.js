"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const post_service_1 = require("./post.service");
const index = async (request, response, next) => {
    try {
        const totalCount = await (0, post_service_1.getPostsTotalCount)({ filter: request.filter });
        response.header('X-Total-Count', totalCount);
    }
    catch (error) {
        next(error);
    }
    try {
        const posts = await (0, post_service_1.getPosts)({
            sort: request.sort,
            filter: request.filter,
            pagination: request.pagination
        });
        response.send(posts);
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
//# sourceMappingURL=post.controller.js.map