require('dotenv').config();
import "reflect-metadata"
import config from 'config'
import { DataSource } from 'typeorm';
import { Property } from "../entitys/property.entity";
import Images from "../entitys/images.entity";
import { Headquarters } from "../entitys/headquarters.entity";
import { User } from "../entitys/user.entity";
import { AddedEntity1736362516145 } from "../migrations/1736362516145-added-entity";


const postgresConfig = {
    ...config.get<{
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
    }>('postgreConfig'),
}

if ( process.env.NODE_ENV === 'development') {
    postgresConfig.host = '127.0.0.1'
}

const postgresDataSource = new DataSource({
    ...postgresConfig,
    // url: config.get<string>('DATABASE_PUBLIC_URL'),
    type: 'postgres',
    synchronize: false,
    logging: false,
    entities: [Property, Images, Headquarters, User],
    migrations: [AddedEntity1736362516145]
})

export default postgresDataSource

