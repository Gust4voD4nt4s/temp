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
exports.findPropertyById = exports.findPropertysWithFilter = exports.createProperty = void 0;
const property_entity_1 = require("../entitys/property.entity");
const data_source_1 = __importDefault(require("../utils/data-source"));
const typeorm_1 = require("typeorm");
const propertyRepository = data_source_1.default.getRepository(property_entity_1.Property);
const createProperty = (property) => __awaiter(void 0, void 0, void 0, function* () {
    const newProperty = propertyRepository.create(property);
    return yield propertyRepository.save(newProperty);
});
exports.createProperty = createProperty;
const findPropertysWithFilter = (filters, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    for (const value in filters) {
        if (filters[value].includes('+')) {
            filters[value] = (0, typeorm_1.MoreThanOrEqual)(filters[value].split('+').join(''));
        }
        if (filters[value] === '') {
            delete filters[value];
        }
        if (value === 'min_value' || value === 'max_value') {
            const minValue = filters.min_value;
            const maxValue = filters.max_value;
            if (minValue && maxValue) {
                filters['value'] = (0, typeorm_1.Between)(minValue, maxValue);
            }
            else if (minValue && !maxValue) {
                filters['value'] = (0, typeorm_1.MoreThanOrEqual)(minValue);
            }
            else if (maxValue && !minValue) {
                filters['value'] = (0, typeorm_1.LessThanOrEqual)(maxValue);
            }
            delete filters.min_value;
            delete filters.max_value;
        }
    }
    const [propertys, total] = yield propertyRepository.findAndCount({
        relations: {
            images: true
        },
        where: Object.assign({}, filters),
        order: {
            created_at: "ASC"
        },
        take: limit,
        skip: (page - 1) * 10
    });
    return { propertys, total };
});
exports.findPropertysWithFilter = findPropertysWithFilter;
const findPropertyById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield propertyRepository.findOneBy({ id: userId });
});
exports.findPropertyById = findPropertyById;
//# sourceMappingURL=property.service.js.map