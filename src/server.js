import dotenv from "dotenv"
import express from "express"
import {router} from "./router.js"

dotenv.config()

const port = process.env.PORT

const app = express()

app.use(express.json())

app.use(router)

app.use((e, req, res, next) => {
    if (e instanceof Error){
        return res.status(400).json({e: e.message})
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})