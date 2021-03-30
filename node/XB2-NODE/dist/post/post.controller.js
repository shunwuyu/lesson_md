"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const post_service_1 = require("./post.service");
const show = async (request, response, next) => {
    const { postId } = request.params;
    try {
        const post = await post_service_1.getPostById(parseInt(postId, 10));
        response.send(post);
    }
    catch (error) {
        next(error);
    }
};
exports.show = show;
//# sourceMappingURL=post.controller.js.map