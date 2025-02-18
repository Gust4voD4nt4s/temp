"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const cors = require('cors');
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const path_1 = require("path");
const validate_env_1 = __importDefault(require("./utils/validate-env"));
const data_source_1 = __importDefault(require("./utils/data-source"));
const property_route_1 = __importDefault(require("./routes/property.route"));
const headquarters_route_1 = __importDefault(require("./routes/headquarters.route"));
const photos_route_1 = __importDefault(require("./routes/photos.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const seed_1 = require("./utils/seed");
data_source_1.default.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, validate_env_1.default)();
    (0, seed_1.runSeeds)(data_source_1.default);
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: '10kb' }));
    app.use(express_1.default.static((0, path_1.resolve)(__dirname, 'uploads')));
    app.use(cors({
        origin: config_1.default.get('origin')
    }));
    app.use('/api/v1/property', property_route_1.default);
    app.use('/api/v1/headquarters', headquarters_route_1.default);
    app.use('/api/v1/user', user_route_1.default);
    app.use('/api/v1/', photos_route_1.default);
    const port = config_1.default.get('port');
    app.listen(port);
    console.log(`Server Started on port: ${port}`);
})).catch((error) => console.log(error));
//# sourceMappingURL=app.js.map