import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Model from './model.entity'
import Images from './images.entity';

// export enum RoleEnumTypeOfProperty {
//     HOME = 'Casa',
//     APARTMENT = 'Apartamento',
//     KITNET = 'Kitnet',
//     STUDIO = 'Studio',
//     COMMERCIALROOM = 'Sala Comercial',
//     Shed = 'Galpão',
//     Loft = 'Loft',
//     CONDOMINIUM = 'Condominium',
//     GROUND = 'Terreno'
// }

// export enum RoleEnumTypeOfPurchase {
//     SALE = 'Comprar',
//     HIRE = 'Aluguar',
//     RENT = 'Arrendar',
//     EXCHANGE = 'Permutar'
// }

// export enum RoleEnumPropertyStatus {
//     INPLANT = 'Na Planta',
//     NEW = 'Novo',
//     USED = 'Usado'
// }

@Entity('property')
export class Property extends Model {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
    })
    type_property: string;

    @Column({
        type: 'varchar',
    })
    type_purchase: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    city: string;

    @Column({
        type: 'varchar',
        length: 2,
    })
    state: string;

    @Column({
        type: 'float'
    })
    value: number;

    @Column({
        type: 'varchar',
        length: 255
    })
    address: string;

    @Column({
        type: 'text',
        nullable: true
    })
    description?: string;

    @Column({
        type: 'float'
    })
    square_meters: number;

    @Column({
        type: 'int',
        nullable: true,
        default: null
    })
    bedrooms_quantity?: number;

    @Column({
        type: 'int',
        nullable: true,
        default: null
    })
    toilet_quantity?: number

    @Column({
        type: 'int',
        nullable: true,
        default: null
    })
    garage_quantity?: number;

    @Column({
        type: 'varchar'
    })
    status: string;
    

    @Column({
        type: 'boolean',
        default: false,
    })
    poll?: boolean;

    @Column({
        type: 'int',
        nullable: true,
        default: null
    })
    pool_size?: number;

    @Column({
        type: 'boolean',
        default: false,
    })
    grill?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    balcony?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    gym?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    recreation_area?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    gardem?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    party_room?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    game_room?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    elevator?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    camera_monitoring?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    hydromassage?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    sauna?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    cinema?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    bike_rack?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    accessibility?: boolean;
    
    @OneToMany(() => Images, (image) => image.property)
    images?: Images[]
}