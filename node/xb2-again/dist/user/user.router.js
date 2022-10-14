"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_middleware_1 = require("./user.middleware");
router.post('/users', user_middleware_1.validateUserData, user_middleware_1.hashPassword);
exports.default = router;
//# sourceMappingURL=user.router.js.map