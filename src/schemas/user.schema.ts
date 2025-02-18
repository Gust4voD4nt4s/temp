import { TypeOf, array, object, string, z } from 'zod'
import { RoleEnumTypeUser } from '../entitys/user.entity';

const imageSchema = object({
    originalname: string({
        required_error: 'Nome original da imagem é obrigatório'
    }),
    filename: string({
        required_error: 'Nome do arquivo da imagem é obrigatório'
    })
});

export const createUserSchema = object({
    body: object({
        email: string({
            required_error: "Email é obrigatorio"
        }).email('E-mail inválido'),
        password: string({
            required_error: "Senha é obrigatorio"
        }).min(8, 'A senha deve ter no mínimo 8 caracteres'),
        passwordConfirm: string({
            required_error: 'Por favor, confirme a senha',
        }),
        role: z.nativeEnum(RoleEnumTypeUser),
        images: array(imageSchema).optional()
    }).refine((data) => data.password === data.passwordConfirm, {
        path: ['passwordConfirm'],
        message: 'As senhas são diferentes',
    }),
})

export const loginUserSchema = object({
    body: object({
        email: string({
            required_error: 'O e-mail é obrigatório',
        }).email('E-mail inválido'),
        password: string({
            required_error: 'A senha é obrigatória',
        }).min(8, 'E-mail ou senha inválidos'),
    }),
});

export const forgotPasswordSchema = object({
    body: object({
        email: string({
            required_error: 'O e-mail é obrigatório',
        }).email('E-mail inválido'),
    }),
});

export const resetPasswordSchema = object({
    body: object({
        password: string({
            required_error: 'A senha é obrigatória',
        }).min(8, 'A senha deve ter no mínimo 8 caracteres'),
        passwordConfirm: string({
            required_error: 'Por favor, confirme a senha',
        }),
    }).refine((data) => data.password === data.passwordConfirm, {
        message: 'As senhas são diferentes',
        path: ['passwordConfirm'],
    }),
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>['body'],
    'passwordConfirm'
>;
export type LoginUserInput = TypeOf<typeof loginUserSchema>['body'];
export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>['body'];
export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;
