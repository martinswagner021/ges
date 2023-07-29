import dotenv from "dotenv"
import express, { Request, Response, NextFunction } from "express"
import {router} from "./router.js"


dotenv.config()

const port = process.env.PORT

const app = express()

app.use(express.json())

app.use(router)

app.use((e: Error, req: Request, res: Response, next: NextFunction) => {
    if (e){
        return res.status(400).json({error: e.message})
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})