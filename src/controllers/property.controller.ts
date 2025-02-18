import { NextFunction, Request, Response } from 'express'
import { createProperty, findPropertyById, findPropertysWithFilter } from '../services/property.service'
import { CreatePropertyInput, createPropertySchema } from '../schemas/property.schema';

import { ZodError } from 'zod';

export const registerProperty = async (req: Request<object, object, CreatePropertyInput>, res: Response, next: NextFunction) => {
    try {
        const newProperty = createPropertySchema.parse({ body: req.body })
        await createProperty(newProperty.body)
        res.status(201).json({ message: 'Imovel criado com sucesso' });
        next()
    } catch (error) {
        if (error instanceof ZodError) {
            const messages = error.issues.map(issue => issue.message);
            return res.status(400).json({
                message: 'Erro ao criar imóvel',
                errors: messages
            });
        } else {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}

export const getProperty = async (req: Request, res: Response) => {
    try {
        const filters = {...req.query}

        const page = req.query.page || 1
        const limit = req.query.limit || 10

        delete filters.page
        delete filters.limit

        const {propertys, total} = await findPropertysWithFilter(filters, Number(page), Number(limit))

        const totalPages = Math.ceil(total / Number(limit));

        res.status(200).json({
            propertys,
            total,
            totalPages,
            currentPage: page,
        });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getPropertyById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const property = await findPropertyById(Number(id))
        if (!property) {
            throw new Error(`Property with id ${id} not found`)
        } 
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json({ error: error });
    }
}