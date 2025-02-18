"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const headquarters_controller_1 = require("../controllers/headquarters.controller");
const desserialize_user_miidlewares_1 = require("../middlewares/desserialize-user.miidlewares");
const validate_middlewares_1 = require("../middlewares/validate.middlewares");
const headquarters_schema_1 = require("../schemas/headquarters.schema");
const router = require('express').Router();
router.post('/', (0, validate_middlewares_1.validate)(headquarters_schema_1.createHeadquartersSchema), desserialize_user_miidlewares_1.deserializeUser, headquarters_controller_1.registerHeadquarters);
router.get('/', headquarters_controller_1.getHeadquarters);
exports.default = router;
//# sourceMappingURL=headquarters.route.js.map