import { TypeOf, array, boolean, number, object, string, z } from 'zod'


const imageSchema = object({
    originalname: string({
        required_error: 'Nome original da imagem é obrigatório'
    }),
    filename: string({
        required_error: 'Nome do arquivo da imagem é obrigatório'
    })
});

export const createPropertySchema = object({
    body: object({          
        type_property: string({
            required_error: "Tipo do imovel é obrigatorio"
        }),
        type_purchase: string({
            required_error: 'Tipo de compra é obrigatoro'
        }),
        city: string({
            required_error: "Cidade é obrigatorio"
        }).max(50, 'Cidade deve ter no maximo 50 caracters'),
        state: string({
            required_error: 'Estado é obrigatorio'
        }).min(2, 'Minimo de 2 caracters'),
        value: number({
            required_error: 'Valor é obrigatorio'
        }),
        address: string({
            required_error: 'Endereço é obrigatorio'
        }).max(255, 'Endereço deve ter no maximo 255 caracters'),
        square_meters: number({
            required_error: 'Area quadrado é obrigatorio'
        }),
        description: string().optional(),
        bedrooms_quantity: number().optional(),
        toilet_quantity: number().optional(),
        garage_quantity: number().optional(),
        status: string({
            required_error: 'Status do imovel é obrigatorio'
        }),
        poll: boolean().optional(),
        grill: boolean().optional(),
        balcony: boolean().optional(),
        recreation_area: boolean().optional(),
        pool_size: number().optional(),
        gym: boolean().optional(),
        gardem: boolean().optional(),
        party_room: boolean().optional(),
        game_room: boolean().optional(),
        elavator: boolean().optional(),
        camera_monitoring: boolean().optional(),
        hydromassage: boolean().optional(),
        sauna: boolean().optional(),
        cinema: boolean().optional(),
        bike_rack: boolean().optional(),
        accessibility: boolean().optional(),
        images: array(imageSchema).optional()
    })
})

export type CreatePropertyInput = TypeOf<typeof createPropertySchema>['body'];