import { AfterLoad, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./model.entity";
import { Property } from "./property.entity";
import { Headquarters } from "./headquarters.entity";
import config from '../../config/default'
import { User } from "./user.entity";

@Entity('images')
export default abstract class Images extends Model {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false
    })
    originalname: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    filename: string;

    url: string

    @AfterLoad()
    getImages() {
        this.url = `${config.baseUrl}/images/${this.filename}`
    }

    @ManyToOne(() => Property, property => property.images)
    @JoinColumn({ name: "property_id" })
    property?: Property;

    @ManyToOne(() => Headquarters, headquarters => headquarters.images)
    @JoinColumn({ name: "hadquarter_id" })
    headquarters?: Headquarters;

    @OneToOne(() => User, user => user.images)
    @JoinColumn({ name: "user_id" })
    user?: User;

}

