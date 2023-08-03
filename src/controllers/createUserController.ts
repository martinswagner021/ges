import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

import createUserService from "../services/createUserService.js";

export default async function createUserController(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body

    try {
        const user = await createUserService(email, password)
        const token = jwt.sign({
            user: user.email
        }, process.env.JWT_SECRET, {
            subject: user._id.toString(),
            expiresIn: "5h"
        })
    
        return res.send(token)
    } catch (error){
        res.status(400).send({error: error.message})
    }

}