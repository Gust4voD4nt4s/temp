"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const property_controller_1 = require("../controllers/property.controller");
const desserialize_user_miidlewares_1 = require("../middlewares/desserialize-user.miidlewares");
const validate_middlewares_1 = require("../middlewares/validate.middlewares");
const property_schema_1 = require("../schemas/property.schema");
const router = require('express').Router();
router.post('/', (0, validate_middlewares_1.validate)(property_schema_1.createPropertySchema), desserialize_user_miidlewares_1.deserializeUser, property_controller_1.registerProperty);
router.get('/', property_controller_1.getProperty);
router.get('/:id', property_controller_1.getPropertyById);
exports.default = router;
//# sourceMappingURL=property.route.js.map