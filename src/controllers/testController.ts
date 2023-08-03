import { Request, Response, NextFunction } from "express"

export default function testController(req: Request, res: Response, next: NextFunction){
    res.send("Hello user: " + req["user_id"])
}