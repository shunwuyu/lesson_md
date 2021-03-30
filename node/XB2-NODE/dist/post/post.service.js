"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = void 0;
const mysql_1 = require("../app/database/mysql");
const getPostById = async (postId) => {
    const statement = `
    SELECT
      post.id,
      post.title,
      post.content
    FROM post
    WHERE post.id = ?
  `;
    const [data] = await mysql_1.connection.promise().query(statement, postId);
    if (!data[0].id) {
        throw new Error('NOT_FOUND');
    }
    return data[0];
};
exports.getPostById = getPostById;
//# sourceMappingURL=post.service.js.map