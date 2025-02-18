"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const random = () => Math.floor(Math.random() * 1000 + 1000);
const multerMiddleware = {
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
            return cb(new multer_1.default.MulterError('LIMIT_UNEXPECTED_FILE', 'Arquivo tem que ser PNG ou JPG'));
        }
        return cb(null, true);
    },
    storage: multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            const uploadPath = path_1.default.resolve(__dirname, '../uploads', 'images');
            cb(null, uploadPath);
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${random()}_${file.originalname}`);
        },
    }),
};
exports.upload = (0, multer_1.default)(multerMiddleware);
//# sourceMappingURL=multer.middlewares.js.map