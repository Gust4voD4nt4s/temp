"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.loginUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const user_entity_1 = require("../entitys/user.entity");
const imageSchema = (0, zod_1.object)({
    originalname: (0, zod_1.string)({
        required_error: 'Nome original da imagem é obrigatório'
    }),
    filename: (0, zod_1.string)({
        required_error: 'Nome do arquivo da imagem é obrigatório'
    })
});
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "Email é obrigatorio"
        }).email('E-mail inválido'),
        password: (0, zod_1.string)({
            required_error: "Senha é obrigatorio"
        }).min(8, 'A senha deve ter no mínimo 8 caracteres'),
        passwordConfirm: (0, zod_1.string)({
            required_error: 'Por favor, confirme a senha',
        }),
        role: zod_1.z.nativeEnum(user_entity_1.RoleEnumTypeUser),
        images: (0, zod_1.array)(imageSchema).optional()
    }).refine((data) => data.password === data.passwordConfirm, {
        path: ['passwordConfirm'],
        message: 'As senhas são diferentes',
    }),
});
exports.loginUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: 'O e-mail é obrigatório',
        }).email('E-mail inválido'),
        password: (0, zod_1.string)({
            required_error: 'A senha é obrigatória',
        }).min(8, 'E-mail ou senha inválidos'),
    }),
});
exports.forgotPasswordSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: 'O e-mail é obrigatório',
        }).email('E-mail inválido'),
    }),
});
exports.resetPasswordSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        password: (0, zod_1.string)({
            required_error: 'A senha é obrigatória',
        }).min(8, 'A senha deve ter no mínimo 8 caracteres'),
        passwordConfirm: (0, zod_1.string)({
            required_error: 'Por favor, confirme a senha',
        }),
    }).refine((data) => data.password === data.passwordConfirm, {
        message: 'As senhas são diferentes',
        path: ['passwordConfirm'],
    }),
});
//# sourceMappingURL=user.schema.js.map