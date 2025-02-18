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
exports.seedHeadquarters = seedHeadquarters;
const headquarters_entity_1 = require("../entitys/headquarters.entity");
function seedHeadquarters(dataSource) {
    return __awaiter(this, void 0, void 0, function* () {
        const headquartersRepository = dataSource.getRepository(headquarters_entity_1.Headquarters);
        const existingHeadquarters = yield headquartersRepository.find();
        if (existingHeadquarters.length > 0) {
            console.log('Headquarters já existem no banco de dados. Pulando seed de headquarters.');
            return;
        }
        const headquartersData = [
            {
                city: 'New York',
                phone: '+1-555-1234567',
                email: 'ny_headquarters@example.com',
                address: '123 Broadway St, New York, NY, USA',
            },
            {
                city: 'Los Angeles',
                phone: '+1-555-7654321',
                email: 'la_headquarters@example.com',
                address: '456 Sunset Blvd, Los Angeles, CA, USA',
            },
            {
                city: 'Chicago',
                phone: '+1-555-1112222',
                email: 'chicago_headquarters@example.com',
                address: '789 Michigan Ave, Chicago, IL, USA',
            },
            {
                city: 'Miami',
                phone: '+1-555-3334444',
                email: 'miami_headquarters@example.com',
                address: '101 Ocean Drive, Miami, FL, USA',
            }
        ];
        for (const data of headquartersData) {
            const headquarters = headquartersRepository.create(data);
            yield headquartersRepository.save(headquarters);
        }
        console.log('Headquarters seeds inserted!');
    });
}
//# sourceMappingURL=headquaarters.seeder.js.map