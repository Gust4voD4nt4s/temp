import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Model from './model.entity'
import Images from './images.entity';


@Entity('headquarters')
export class Headquarters extends Model {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 50
    })
    city: string;

    @Column({
        type: 'varchar',
        length: 24
    })
    phone: string

    @Column({
        type: 'varchar',
        length: 255
    })
    email: string

    @Column({
        type: 'varchar',
        length: 255
    })
    address: string;

    @OneToMany(() => Images, (image) => image.headquarters)
    images?: Images[]
}