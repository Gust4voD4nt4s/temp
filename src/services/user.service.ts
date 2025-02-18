require('dotenv').config();
import { Repository } from "typeorm";
import postgresDataSource from "../utils/data-source";
import { User } from "../entitys/user.entity";
import { CreateUserInput } from "../schemas/user.schema";
import bcrypt from 'bcryptjs';
import { randomBytes } from "crypto";
import config from 'config';
import { signJwt } from "../utils/jwt";


const userRepository: Repository<User> = postgresDataSource.getRepository(User);

export const createUser = async (user: CreateUserInput) => {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    const newUser = userRepository.create({ ...user, password: hashedPassword , email: user.email.toLocaleLowerCase()});
    return await userRepository.save(newUser);
};

export const findUserByEmail = async (email: string) => {
    const user = userRepository.findOneBy({email: email})
    return user
}

export const findUserById = async (id: number) => {
    const user = userRepository.findOneBy({id: id})
    return user
}

export const comparePassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
}

export const signToken = async (user: User) => {   
    
    const access_token = signJwt({ sub: user.id }, 'accessTokenPrivateKey', {
        expiresIn: `${config.get<number>('accessTokenExpiresIn')}m`,
    });

    // const refresh_token = signJwt({ sub: user.id }, 'refreshTokenPrivateKey', {
    //     expiresIn: `${config.get<number>('refreshTokenExpiresIn')}m`,
    // });

    return { access_token };
};