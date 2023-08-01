import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

import authUserService from "../services/authUserService.js"

export default async function authUserController(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body

    try {
        const user = await authUserService(username, password)
        const token = jwt.sign({
            user: user.username
        }, process.env.JWT_SECRET, {
            subject: user._id.toString(),
            expiresIn: "5h"
        })
        res.send(token)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
