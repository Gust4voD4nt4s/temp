import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod';
import { CreateHeadquartersInput, createHeadquartersSchema } from '../schemas/headquarters.schema';
import { createHeadquarters, findHeadquarters } from '../services/headquarters.service';

export const registerHeadquarters = async (req: Request<object, object, CreateHeadquartersInput>, res: Response, next: NextFunction) => {
    try {
        const newHeadquarters = createHeadquartersSchema.parse({ body: req.body })
        await createHeadquarters(newHeadquarters.body)
        res.status(201).json({ message: 'Sede criado com sucesso' });
        next()
    } catch (error) {
        if (error instanceof ZodError) {
            const messages = error.issues.map(issue => issue.message);
            return res.status(400).json({
                message: 'Erro ao criar Sede',
                errors: messages
            });
        } else {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
} 

export const getHeadquarters = async (req: Request, res: Response) => {
    try {
        const headquarters = await findHeadquarters();
        res.status(200).json(headquarters)
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error });
    }
};