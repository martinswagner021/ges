import { Request, Response, NextFunction } from "express"
import createAnalistaService from "../../services/post/createAnalistaService.js"

export default async function createAnalistaController(req: Request, res: Response, next: NextFunction){
    const { nome, cpf } = req.body
    try {
        const analista = await createAnalistaService({nome, cpf})
        return res.status(201).json(analista)
    } catch (error) {
        return res.status(409).send({error: error.message})
    }
}