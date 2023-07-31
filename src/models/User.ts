import { Schema } from "mongoose"
import db from "../db/connect.js"

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const User = db.model("User", userSchema)

export default User