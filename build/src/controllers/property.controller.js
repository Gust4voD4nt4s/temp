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
exports.getPropertyById = exports.getProperty = exports.registerProperty = void 0;
const property_service_1 = require("../services/property.service");
const property_schema_1 = require("../schemas/property.schema");
const zod_1 = require("zod");
const registerProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProperty = property_schema_1.createPropertySchema.parse({ body: req.body });
        yield (0, property_service_1.createProperty)(newProperty.body);
        res.status(201).json({ message: 'Imovel criado com sucesso' });
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            const messages = error.issues.map(issue => issue.message);
            return res.status(400).json({
                message: 'Erro ao criar imóvel',
                errors: messages
            });
        }
        else {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
});
exports.registerProperty = registerProperty;
const getProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = Object.assign({}, req.query);
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        delete filters.page;
        delete filters.limit;
        const { propertys, total } = yield (0, property_service_1.findPropertysWithFilter)(filters, Number(page), Number(limit));
        const totalPages = Math.ceil(total / Number(limit));
        res.status(200).json({
            propertys,
            total,
            totalPages,
            currentPage: page,
        });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.getProperty = getProperty;
const getPropertyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const property = yield (0, property_service_1.findPropertyById)(Number(id));
        if (!property) {
            throw new Error(`Property with id ${id} not found`);
        }
        res.status(200).json(property);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.getPropertyById = getPropertyById;
//# sourceMappingURL=property.controller.js.map