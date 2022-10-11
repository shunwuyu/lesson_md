"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const mysql_1 = require("../app/database/mysql");
const createUser = async (user) => {
    const statement = `
    insert into user 
    set ?
    `;
    const [data] = await mysql_1.connection.promise().query(statement, user);
    return data;
};
exports.createUser = createUser;
//# sourceMappingURL=user.service.js.map