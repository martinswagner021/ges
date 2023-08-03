import { config } from "dotenv"
config()

import mongoose from "mongoose"

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Successfully connected to DB."))
.catch((err) => console.log(err.message))

export default mongoose