import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

import authUserService from "../../services/post/authUserService.js"

export default async function authUserController(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body

    try {
        const user = await authUserService(email, password)
        const token = jwt.sign({
            user: user.email
        }, process.env.JWT_SECRET, {
            subject: user._id.toString(),
            expiresIn: "5h"
        })
        return res.send(token)
    } catch (error) {
        return res.status(400).send({error: error.message})
    }
}
