import { Request, Response, NextFunction } from "express"
import listAnalistaService from "../../services/get/listAnalistaService.js"

export default async function listAnalistaController(req: Request, res: Response, next: NextFunction){
        const analistas = await listAnalistaService()
        return res.status(200).json(analistas)
}