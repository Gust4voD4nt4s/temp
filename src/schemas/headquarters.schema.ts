import { TypeOf, array, object, string } from 'zod'

const imageSchema = object({
    originalname: string({
        required_error: 'Nome original da imagem é obrigatório'
    }),
    filename: string({
        required_error: 'Nome do arquivo da imagem é obrigatório'
    })
});

export const createHeadquartersSchema = object({
    body: object({          
        city: string({
            required_error: "Cidade é obrigatorio"
        }).max(50, 'Cidade deve ter no maximo 50 caracters'),
        phone: string({
            required_error: "Telefone é obrigatorio"
        }).max(24, 'Telefone deve ter no maximo 24 digitos'),
        email: string({
            required_error: 'Email é obrigatorio'
        }).email('Este não é um email valido'),
        address: string({
            required_error: 'Endereço é obrigatorio'
        }).max(255, 'Endereço deve ter no maximo 255 caracters'),
        images: array(imageSchema).optional()
    })
})

export type CreateHeadquartersInput = TypeOf<typeof createHeadquartersSchema>['body'];
