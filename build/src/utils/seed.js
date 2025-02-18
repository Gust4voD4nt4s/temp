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
exports.runSeeds = void 0;
const property_seeder_1 = require("../seeds/property.seeder");
const headquaarters_seeder_1 = require("../seeds/headquaarters.seeder");
// import { seedUsers } from '../seeds/user.seeder';
const runSeeds = (AppDataSource) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Seeding properties...');
        yield (0, property_seeder_1.seedProperties)(AppDataSource);
        console.log('Seeding headquarters...');
        yield (0, headquaarters_seeder_1.seedHeadquarters)(AppDataSource);
        // console.log('Seeding users...');
        // await seedUsers(AppDataSource);
        console.log('All seeds completed!');
    }
    catch (error) {
        console.error('Error executing seeds:', error);
    }
});
exports.runSeeds = runSeeds;
//# sourceMappingURL=seed.js.map