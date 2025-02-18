"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photos_controller_1 = require("../controllers/photos.controller");
const desserialize_user_miidlewares_1 = require("../middlewares/desserialize-user.miidlewares");
const router = require('express').Router();
router.post('/photosProperty/', desserialize_user_miidlewares_1.deserializeUser, photos_controller_1.photosProperty);
exports.default = router;
//# sourceMappingURL=photos.route.js.map