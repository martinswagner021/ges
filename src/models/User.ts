import { Schema } from "mongoose"
import mongoose from "../db/connect.js"

const userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const User = mongoose.model("User", userSchema)

export default User