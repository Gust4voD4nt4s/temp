import { NextFunction, Request, Response } from 'express'
import { User } from "../entitys/user.entity"
import { CreateUserInput, createUserSchema, LoginUserInput, loginUserSchema } from "../schemas/user.schema"
import { comparePassword, createUser, findUserByEmail } from "../services/user.service"
import { email } from '../utils/email'
import { ZodError } from 'zod'
import { signToken } from '../services/user.service'

export const registerUser = async (req: Request<object, object, CreateUserInput>, res: Response, next: NextFunction) => {
    try {
        const newUser = createUserSchema.parse({ body: req.body })
        await createUser(newUser.body)
        res.status(201).json({ menssage: 'Usuario criado com sucesso' })
        next()
    } catch (error) {
        if (error instanceof ZodError) {
            const messages = error.issues.map(issue => issue.message);
            return res.status(400).json({
                message: 'Erro ao criar Usuario',
                errors: messages
            });
        } else {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}

export const loginUser = async (req: Request<object, object, LoginUserInput>, res: Response, next: NextFunction) => {
    try {
        const data = loginUserSchema.parse({ body: req.body })
        const user = await findUserByEmail(data.body.email)

        if (!user || !(await comparePassword(data.body.password, user.password))) {
            return res.status(400).json({
                menssage: 'Email ou senha invalido'
            })
        }

        const { access_token } = await signToken(user)

        return res.status(200).json(
            {
                status: 'success',
                token: access_token
            }
        )

    } catch (error) {
        res.status(500).json({ message: error });
    }
}