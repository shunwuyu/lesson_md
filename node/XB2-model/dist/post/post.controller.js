"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const post_service_1 = require("./post.service");
const store = async (request, response) => {
    console.log(request.body, '++++++ ++++++++++=');
    const { title, content } = request.body;
    const { id: userId } = request.user;
    const data = await post_service_1.createPost({ title, content, userId });
    response.status(201).send(data);
};
exports.store = store;
//# sourceMappingURL=post.controller.js.map