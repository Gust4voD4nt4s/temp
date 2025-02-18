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
exports.signToken = exports.comparePassword = exports.findUserById = exports.findUserByEmail = exports.createUser = void 0;
require('dotenv').config();
const data_source_1 = __importDefault(require("../utils/data-source"));
const user_entity_1 = require("../entitys/user.entity");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("config"));
const jwt_1 = require("../utils/jwt");
const userRepository = data_source_1.default.getRepository(user_entity_1.User);
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcryptjs_1.default.hash(user.password, 12);
    const newUser = userRepository.create(Object.assign(Object.assign({}, user), { password: hashedPassword, email: user.email.toLocaleLowerCase() }));
    return yield userRepository.save(newUser);
});
exports.createUser = createUser;
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = userRepository.findOneBy({ email: email });
    return user;
});
exports.findUserByEmail = findUserByEmail;
const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = userRepository.findOneBy({ id: id });
    return user;
});
exports.findUserById = findUserById;
const comparePassword = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcryptjs_1.default.compare(password, hashedPassword);
});
exports.comparePassword = comparePassword;
const signToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const access_token = (0, jwt_1.signJwt)({ sub: user.id }, 'accessTokenPrivateKey', {
        expiresIn: `${config_1.default.get('accessTokenExpiresIn')}m`,
    });
    // const refresh_token = signJwt({ sub: user.id }, 'refreshTokenPrivateKey', {
    //     expiresIn: `${config.get<number>('refreshTokenExpiresIn')}m`,
    // });
    return { access_token };
});
exports.signToken = signToken;
//# sourceMappingURL=user.service.js.map