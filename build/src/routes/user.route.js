"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const validate_middlewares_1 = require("../middlewares/validate.middlewares");
const user_schema_1 = require("../schemas/user.schema");
const router = require('express').Router();
router.post('/register', (0, validate_middlewares_1.validate)(user_schema_1.createUserSchema), user_controller_1.registerUser);
router.post('/login', (0, validate_middlewares_1.validate)(user_schema_1.loginUserSchema), user_controller_1.loginUser);
exports.default = router;
//# sourceMappingURL=user.route.js.map