import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export function ensureAuth(req: Request, res: Response, next: NextFunction){
    try {
        const [, token] = req.headers.authorization?.split(' ')
        const { sub } = jwt.verify(token, process.env.JWT_SECRET)
        req.user_id = sub
    } catch (error) {
        res.status(401).end()
    }

    return next()
}