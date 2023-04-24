"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = exports.getPostsTotalCount = void 0;
const mysql_1 = require("../app/database/mysql");
const post_provider_1 = require("./post.provider");
const getPostsTotalCount = async (options) => {
    const { filter } = options;
    let params = [filter.param];
    const statement = `
    SELECT
      COUNT(DISTINCT post.id) AS total
    FROM post
    WHERE ${filter.sql}
  `;
    const [data] = await mysql_1.connection.promise().query(statement, params);
    console.log(data);
    return data[0].total;
};
exports.getPostsTotalCount = getPostsTotalCount;
const getPosts = async (options) => {
    const { sort, filter, pagination: { limit, offset } } = options;
    let params = [limit, offset];
    if (filter.param) {
        params = [filter.param, ...params];
    }
    const statement = `
      SELECT
        post.id,
        post.title,
        post.content,
        ${post_provider_1.sqlFragment.totalComments}
      FROM post
      WHERE ${filter.sql}
      GROUP BY post.id
      ORDER BY ${sort}
      LIMIT ?
      OFFSET ?
    `;
    const [data] = await mysql_1.connection.promise().query(statement, params);
    return data;
};
exports.getPosts = getPosts;
//# sourceMappingURL=post.service.js.map