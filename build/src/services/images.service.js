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
exports.createImages = void 0;
const images_entity_1 = __importDefault(require("../entitys/images.entity"));
const property_entity_1 = require("../entitys/property.entity");
const data_source_1 = __importDefault(require("../utils/data-source"));
const imagesRepository = data_source_1.default.getRepository(images_entity_1.default);
const propertyRepository = data_source_1.default.getRepository(property_entity_1.Property);
const createImages = (images) => __awaiter(void 0, void 0, void 0, function* () {
    const newImages = [];
    for (const imageData of images) {
        const property = yield propertyRepository.findOne({ where: { id: imageData.property_id } });
        if (!property) {
            throw new Error(`property with id ${imageData.property_id} not found`);
        }
        const newImage = imagesRepository.create(Object.assign(Object.assign({}, imageData), { property: property }));
        newImages.push(newImage);
    }
    return yield imagesRepository.save(newImages);
});
exports.createImages = createImages;
//# sourceMappingURL=images.service.js.map