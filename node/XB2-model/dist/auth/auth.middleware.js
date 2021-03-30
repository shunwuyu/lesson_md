"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginDate = exports.authGuard = exports.currentUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userService = __importStar(require("../user/user.serverice"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app_config_1 = require("../app/app.config");
const currentUser = (request, response, next) => {
    let user = {
        id: null,
        name: 'anonymous',
    };
    try {
        const authorization = request.header('Authorization');
        console.log(authorization, '_____________________--');
        const decoded = jsonwebtoken_1.default.verify(authorization, app_config_1.PUBLIC_KEY);
        user = decoded;
        console.log(user, '+++++++++++');
    }
    catch (error) { }
    request.user = user;
    next();
};
exports.currentUser = currentUser;
const authGuard = (request, response, next) => {
    console.log('👮🏼‍♀️ 验证用户身份');
    if (request.user.id) {
        next();
    }
    else {
        next(new Error('UNAUTHORIZED'));
    }
};
exports.authGuard = authGuard;
const validateLoginDate = async (request, response, next) => {
    console.log('👮‍♂️ 验证用户登录数据');
    const { name, password } = request.body;
    if (!name)
        return next(new Error('NAME_IS_REQUIRED'));
    if (!password)
        return next(new Error('PASSWORD_IS_REQUIRED'));
    const user = await userService.getUserByName(name, { password: true });
    console.log(user, '+++++++++++++++++');
    if (!user)
        return next(new Error('USER_DOES_NOT_EXIST'));
    const matched = await bcrypt_1.default.compare(password, user.password);
    if (!matched)
        return next(new Error('PASSWORD_DOES_NOT_MATCH'));
    request.body.user = user;
    next();
};
exports.validateLoginDate = validateLoginDate;
//# sourceMappingURL=auth.middleware.js.map