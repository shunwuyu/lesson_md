"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const auth_service_1 = require("./auth.service");
const login = async (request, response, next) => {
    const { user: { id, name }, } = request.body;
    console.log(id, name, '---------------');
    const payload = { id, name };
    try {
        const token = auth_service_1.signToken({ payload });
        response.send({ id, name, token });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
//# sourceMappingURL=auth.cotroller.js.map