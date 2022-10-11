"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.validateUserData = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const validateUserData = async (req, res, next) => {
    console.log("‍(创建用户时)验证用户数据");
    const { name, password } = req.body;
    console.log(name, password, '+++++');
    if (!name)
        return next(new Error("NAME_IS_REQUIRED"));
    if (!password)
        return next(new Error("PASSWORD_IS_REQUIRED"));
    next();
};
exports.validateUserData = validateUserData;
const hashPassword = async (req, res, next) => {
    const { password } = req.body;
    req.body.password = await bcrypt_1.default.hash(password, 10);
    next();
};
exports.hashPassword = hashPassword;
//# sourceMappingURL=user.middleware.js.map