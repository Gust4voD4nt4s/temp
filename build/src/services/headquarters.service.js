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
exports.findHeadquarters = exports.createHeadquarters = void 0;
const headquarters_entity_1 = require("../entitys/headquarters.entity");
const data_source_1 = __importDefault(require("../utils/data-source"));
const headquartersRepository = data_source_1.default.getRepository(headquarters_entity_1.Headquarters);
const createHeadquarters = (headquarters) => __awaiter(void 0, void 0, void 0, function* () {
    const newHeadquarters = headquartersRepository.create(headquarters);
    return yield headquartersRepository.save(newHeadquarters);
});
exports.createHeadquarters = createHeadquarters;
const findHeadquarters = () => __awaiter(void 0, void 0, void 0, function* () {
    const headquarters = yield headquartersRepository.find({
        relations: {
            images: true
        }
    });
    return headquarters;
});
exports.findHeadquarters = findHeadquarters;
//# sourceMappingURL=headquarters.service.js.map