import jwt from "jsonwebtoken"
import { json } from "express"

export function ensureAuth(req, res, next){
    const authToken = req.headers.authorization.split(' ')[1]

    if (!authToken){
        res.status(401).send("Unauthorized")
    }

    if (jwt.verify(authToken, process.env.SECRET)){
        return next()
    }

    return next()
}