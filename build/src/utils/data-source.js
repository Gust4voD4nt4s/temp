"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const config_1 = __importDefault(require("config"));
const typeorm_1 = require("typeorm");
const property_entity_1 = require("../entitys/property.entity");
const images_entity_1 = __importDefault(require("../entitys/images.entity"));
const headquarters_entity_1 = require("../entitys/headquarters.entity");
const user_entity_1 = require("../entitys/user.entity");
const _1736362516145_added_entity_1 = require("../migrations/1736362516145-added-entity");
const postgresConfig = Object.assign({}, config_1.default.get('postgreConfig'));
if (process.env.NODE_ENV === 'development') {
    postgresConfig.host = '127.0.0.1';
}
const postgresDataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, postgresConfig), { 
    // url: config.get<string>('DATABASE_PUBLIC_URL'),
    type: 'postgres', synchronize: false, logging: false, entities: [property_entity_1.Property, images_entity_1.default, headquarters_entity_1.Headquarters, user_entity_1.User], migrations: [_1736362516145_added_entity_1.AddedEntity1736362516145] }));
exports.default = postgresDataSource;
//# sourceMappingURL=data-source.js.map