import { Column, Entity, Index, OneToOne } from "typeorm";
import Model from "./model.entity";
import Images from './images.entity';

export enum RoleEnumTypeUser {
    ADMIN = 'admin',
}

@Entity('user')
export class User extends Model {

    @Index('email_index')
    @Column({
        type: "varchar",
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar'
    })
    password: string;
    
    @Column({
        type: 'enum',
        enum: RoleEnumTypeUser,
        default: RoleEnumTypeUser.ADMIN,
    })
    role: RoleEnumTypeUser.ADMIN;

    @Column({
        type: 'varchar',
        length: 12,
        nullable: true
    })
    phone?: string;

    @OneToOne(() => Images, (image) => image.user)
    images?: Images[];
}
