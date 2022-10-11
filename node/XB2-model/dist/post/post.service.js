"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const mysql_1 = require("../app/database/mysql");
const createPost = async (post) => {
    const statement = `
    INSERT INTO post
    SET ?
  `;
    console.log(statement, '++++++');
    const [data] = await mysql_1.connection.promise().query(statement, post);
    return data;
};
exports.createPost = createPost;
//# sourceMappingURL=post.service.js.map