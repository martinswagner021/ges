import { config } from "dotenv"
config()

import express from "express"
import router from "./router.js"

const port = process.env.PORT

const app = express()

app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})