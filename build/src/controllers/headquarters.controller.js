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
exports.getHeadquarters = exports.registerHeadquarters = void 0;
const zod_1 = require("zod");
const headquarters_schema_1 = require("../schemas/headquarters.schema");
const headquarters_service_1 = require("../services/headquarters.service");
const registerHeadquarters = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newHeadquarters = headquarters_schema_1.createHeadquartersSchema.parse({ body: req.body });
        yield (0, headquarters_service_1.createHeadquarters)(newHeadquarters.body);
        res.status(201).json({ message: 'Sede criado com sucesso' });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            const messages = error.issues.map(issue => issue.message);
            return res.status(400).json({
                message: 'Erro ao criar Sede',
                errors: messages
            });
        }
        else {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
});
exports.registerHeadquarters = registerHeadquarters;
const getHeadquarters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headquarters = yield (0, headquarters_service_1.findHeadquarters)();
        res.status(200).json(headquarters);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: error });
    }
});
exports.getHeadquarters = getHeadquarters;
//# sourceMappingURL=headquarters.controller.js.map