import { CreateDateColumn, PrimaryGeneratedColumn, BaseEntity, DeleteDateColumn } from 'typeorm';

export default abstract class Model extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}

