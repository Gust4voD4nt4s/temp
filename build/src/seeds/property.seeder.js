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
exports.seedProperties = seedProperties;
const property_entity_1 = require("../entitys/property.entity");
function seedProperties(dataSource) {
    return __awaiter(this, void 0, void 0, function* () {
        const propertyRepository = dataSource.getRepository(property_entity_1.Property);
        const existingProperties = yield propertyRepository.find();
        if (existingProperties.length > 0) {
            console.log('Properties já existem no banco de dados. Pulando seed de properties.');
            return;
        }
        const arrayProperty = ['Casa', 'Apartamento', 'Kitnet', 'Studio', 'Sala Comercial', 'Golpão', 'Loft', 'Condominio', 'Terreno', 'Rural', 'Alto Padrão'];
        const arrayTypeOfPurchase = ['Comprar', 'Alugar', 'Arrendar', 'Permutar'];
        const arrayStatus = ['Na Planta', 'Novo', 'Usado'];
        const propertiesData = [];
        for (let i = 1; i <= 100; i++) {
            const property = {
                id: i,
                type_property: arrayProperty[Math.floor(Math.random() * 9)],
                type_purchase: arrayTypeOfPurchase[Math.floor(Math.random() * 4)],
                city: i % 2 === 0 ? 'Rio de Janeiro' : 'São Paulo',
                state: i % 2 === 0 ? 'RJ' : 'SP',
                value: Math.floor(Math.random() * 1000000),
                address: `Rua Exemplo, ${i}`,
                description: `Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado`,
                square_meters: Math.floor(Math.random() * 200),
                bedrooms_quantity: Math.floor(Math.random() * 5) + 1,
                toilet_quantity: Math.floor(Math.random() * 3) + 1,
                garage_quantity: Math.floor(Math.random() * 2) + 1,
                status: arrayStatus[Math.floor(Math.random() * 3)],
                poll: Math.random() < 0.5,
                pool_size: Math.floor(Math.random() * 2) + 1,
                grill: Math.random() < 0.5, balcony: Math.random() < 0.5, gym: Math.random() < 0.5,
                recreation_area: Math.random() < 0.5,
                gardem: Math.random() < 0.5,
                party_room: Math.random() < 0.5,
                game_room: Math.random() < 0.5,
                elevator: Math.random() < 0.5,
                camera_monitoring: Math.random() < 0.5,
                hydromassage: Math.random() < 0.5,
                sauna: Math.random() < 0.5,
                cinema: Math.random() < 0.5,
                bike_rack: Math.random() < 0.5,
                accessibility: Math.random() < 0.5,
                images: [],
            };
            propertiesData.push(property);
        }
        for (const data of propertiesData) {
            const properties = propertyRepository.create(data);
            yield propertyRepository.save(properties);
        }
        console.log('Properties seeds inserted!');
    });
}
//# sourceMappingURL=property.seeder.js.map