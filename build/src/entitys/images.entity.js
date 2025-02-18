"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const property_entity_1 = require("./property.entity");
const headquarters_entity_1 = require("./headquarters.entity");
const default_1 = __importDefault(require("../../config/default"));
const user_entity_1 = require("./user.entity");
let Images = class Images extends model_entity_1.default {
    getImages() {
        this.url = `${default_1.default.baseUrl}/images/${this.filename}`;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Images.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false
    }),
    __metadata("design:type", String)
], Images.prototype, "originalname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false
    }),
    __metadata("design:type", String)
], Images.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Images.prototype, "getImages", null);
__decorate([
    (0, typeorm_1.ManyToOne)(() => property_entity_1.Property, property => property.images),
    (0, typeorm_1.JoinColumn)({ name: "property_id" }),
    __metadata("design:type", property_entity_1.Property)
], Images.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => headquarters_entity_1.Headquarters, headquarters => headquarters.images),
    (0, typeorm_1.JoinColumn)({ name: "hadquarter_id" }),
    __metadata("design:type", headquarters_entity_1.Headquarters)
], Images.prototype, "headquarters", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, user => user.images),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], Images.prototype, "user", void 0);
Images = __decorate([
    (0, typeorm_1.Entity)('images')
], Images);
exports.default = Images;
//# sourceMappingURL=images.entity.js.map