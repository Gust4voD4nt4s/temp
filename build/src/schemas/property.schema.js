"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPropertySchema = void 0;
const zod_1 = require("zod");
const imageSchema = (0, zod_1.object)({
    originalname: (0, zod_1.string)({
        required_error: 'Nome original da imagem é obrigatório'
    }),
    filename: (0, zod_1.string)({
        required_error: 'Nome do arquivo da imagem é obrigatório'
    })
});
exports.createPropertySchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        type_property: (0, zod_1.string)({
            required_error: "Tipo do imovel é obrigatorio"
        }),
        type_purchase: (0, zod_1.string)({
            required_error: 'Tipo de compra é obrigatoro'
        }),
        city: (0, zod_1.string)({
            required_error: "Cidade é obrigatorio"
        }).max(50, 'Cidade deve ter no maximo 50 caracters'),
        state: (0, zod_1.string)({
            required_error: 'Estado é obrigatorio'
        }).min(2, 'Minimo de 2 caracters'),
        value: (0, zod_1.number)({
            required_error: 'Valor é obrigatorio'
        }),
        address: (0, zod_1.string)({
            required_error: 'Endereço é obrigatorio'
        }).max(255, 'Endereço deve ter no maximo 255 caracters'),
        square_meters: (0, zod_1.number)({
            required_error: 'Area quadrado é obrigatorio'
        }),
        description: (0, zod_1.string)().optional(),
        bedrooms_quantity: (0, zod_1.number)().optional(),
        toilet_quantity: (0, zod_1.number)().optional(),
        garage_quantity: (0, zod_1.number)().optional(),
        status: (0, zod_1.string)({
            required_error: 'Status do imovel é obrigatorio'
        }),
        poll: (0, zod_1.boolean)().optional(),
        grill: (0, zod_1.boolean)().optional(),
        balcony: (0, zod_1.boolean)().optional(),
        recreation_area: (0, zod_1.boolean)().optional(),
        pool_size: (0, zod_1.number)().optional(),
        gym: (0, zod_1.boolean)().optional(),
        gardem: (0, zod_1.boolean)().optional(),
        party_room: (0, zod_1.boolean)().optional(),
        game_room: (0, zod_1.boolean)().optional(),
        elavator: (0, zod_1.boolean)().optional(),
        camera_monitoring: (0, zod_1.boolean)().optional(),
        hydromassage: (0, zod_1.boolean)().optional(),
        sauna: (0, zod_1.boolean)().optional(),
        cinema: (0, zod_1.boolean)().optional(),
        bike_rack: (0, zod_1.boolean)().optional(),
        accessibility: (0, zod_1.boolean)().optional(),
        images: (0, zod_1.array)(imageSchema).optional()
    })
});
//# sourceMappingURL=property.schema.js.map