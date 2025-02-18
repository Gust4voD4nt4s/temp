import { NextFunction, Request, Response } from "express";
import { verifyJwt } from '../utils/jwt'
import { findUserById } from "../services/user.service";

export const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
    const {authorization} = req.headers;

    if (!authorization) {
        return res.status(401).json({
            error: 'Login nescessario'
        })
    }

    const [, token] = authorization.toString().split(' ')

    try {
        const decoded = verifyJwt<{ sub: number }>(token, 'accessTokenPublicKey')

        if (!decoded) {
            return res.status(401).json({
                erro: 'Token invalido ou usuario não existe'
            })
        }

        const user = await findUserById(decoded.sub)

        if (!user) {
            return res.status(401).json({
                error: 'Token inválido ou a sessão expirou'
            })
        }

        res.locals.user = user;

        return next()
    } catch (error) {
        return res.status(401).json({
            error: 'Token expirado ou invalido'
        })
    }

}