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
exports.deserializeUser = void 0;
const jwt_1 = require("../utils/jwt");
const user_service_1 = require("../services/user.service");
const deserializeUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            error: 'Login nescessario'
        });
    }
    const [, token] = authorization.toString().split(' ');
    try {
        const decoded = (0, jwt_1.verifyJwt)(token, 'accessTokenPublicKey');
        if (!decoded) {
            return res.status(401).json({
                erro: 'Token invalido ou usuario não existe'
            });
        }
        const user = yield (0, user_service_1.findUserById)(decoded.sub);
        if (!user) {
            return res.status(401).json({
                error: 'Token inválido ou a sessão expirou'
            });
        }
        res.locals.user = user;
        return next();
    }
    catch (error) {
        return res.status(401).json({
            error: 'Token expirado ou invalido'
        });
    }
});
exports.deserializeUser = deserializeUser;
//# sourceMappingURL=desserialize-user.miidlewares.js.map