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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const user_schema_1 = require("../schemas/user.schema");
const user_service_1 = require("../services/user.service");
const zod_1 = require("zod");
const user_service_2 = require("../services/user.service");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = user_schema_1.createUserSchema.parse({ body: req.body });
        yield (0, user_service_1.createUser)(newUser.body);
        res.status(201).json({ menssage: 'Usuario criado com sucesso' });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            const messages = error.issues.map(issue => issue.message);
            return res.status(400).json({
                message: 'Erro ao criar Usuario',
                errors: messages
            });
        }
        else {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = user_schema_1.loginUserSchema.parse({ body: req.body });
        const user = yield (0, user_service_1.findUserByEmail)(data.body.email);
        if (!user || !(yield (0, user_service_1.comparePassword)(data.body.password, user.password))) {
            return res.status(400).json({
                menssage: 'Email ou senha invalido'
            });
        }
        const { access_token } = yield (0, user_service_2.signToken)(user);
        return res.status(200).json({
            status: 'success',
            token: access_token
        });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=user.controller.js.map