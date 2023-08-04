import { Schema } from "mongoose"
import mongoose from "../db/connect.js"

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        maxlength: 11,
        required: true
    },
    cnpj: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: Boolean,
        default: false
    },
    endereco: {
        cep: {
            type: Number,
            maxlength: 8,
            required: true
        },
        rua: {
            type: String,
            maxlength: 40,
            required: true
        },
        cidade: {
            type: String,
            maxlength: 40,
            required: true
        },
        estado: {
            type: String,
            maxlength: 2,
            minlength: 2,
            required: true
        }
    }
})

const User = mongoose.model("User", userSchema)

export default User