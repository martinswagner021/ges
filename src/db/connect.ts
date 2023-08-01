import mongoose from "mongoose"
import { config } from "dotenv"
config()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Successfully connected to DB."))
.catch((e) => console.log(e.message))

export default mongoose