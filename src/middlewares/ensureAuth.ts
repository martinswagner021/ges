import { Request, Response, NextFunction } from "express"

export function ensureAuth(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    if (!authToken){
        res.status(401).end()
    }

    return next()
}