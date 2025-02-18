"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeadquartersSchema = void 0;
const zod_1 = require("zod");
const imageSchema = (0, zod_1.object)({
    originalname: (0, zod_1.string)({
        required_error: 'Nome original da imagem é obrigatório'
    }),
    filename: (0, zod_1.string)({
        required_error: 'Nome do arquivo da imagem é obrigatório'
    })
});
exports.createHeadquartersSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        city: (0, zod_1.string)({
            required_error: "Cidade é obrigatorio"
        }).max(50, 'Cidade deve ter no maximo 50 caracters'),
        phone: (0, zod_1.string)({
            required_error: "Telefone é obrigatorio"
        }).max(24, 'Telefone deve ter no maximo 24 digitos'),
        email: (0, zod_1.string)({
            required_error: 'Email é obrigatorio'
        }).email('Este não é um email valido'),
        address: (0, zod_1.string)({
            required_error: 'Endereço é obrigatorio'
        }).max(255, 'Endereço deve ter no maximo 255 caracters'),
        images: (0, zod_1.array)(imageSchema).optional()
    })
});
//# sourceMappingURL=headquarters.schema.js.map