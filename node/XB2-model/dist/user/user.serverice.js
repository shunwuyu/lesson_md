"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByName = exports.getUser = exports.createUser = void 0;
const mysql_1 = require("../app/database/mysql");
const createUser = async (user) => {
    const statement = `
    INSERT INTO user
    SET ?
  `;
    const [data] = await mysql_1.connection.promise().query(statement, user);
    return data;
};
exports.createUser = createUser;
const getUser = (condition) => {
    return async (param, options = {}) => {
        console.log(condition, '?????||||||||||||//////');
        const { password } = options;
        const statement = `
      SELECT 
        user.id,
        user.name,
        user.password
      FROM
        user
      WHERE 
        ${condition} = ?
    `;
        const [data] = await mysql_1.connection.promise().query(statement, param);
        console.log(data);
        return data[0].id ? data[0] : null;
    };
};
exports.getUser = getUser;
exports.getUserByName = exports.getUser('user.name');
//# sourceMappingURL=user.serverice.js.map