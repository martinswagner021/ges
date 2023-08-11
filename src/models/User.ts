import { Schema, SchemaTypes } from "mongoose"
import mongoose from "../db/connect.js"

const userSchema = new Schema({
    email: {
        type: SchemaTypes.String,
        required: true
    },
    password: {
        type: SchemaTypes.String,
        required: true
    },
    telefone: {
        type: SchemaTypes.String,
        maxlength: 17,
        required: true
    },
    cnpj: {
        type: SchemaTypes.String,
        maxlength: 18,
        required: true
    },
    endereco: {
        cep: {
            type: SchemaTypes.String,
            maxlength: 9,
            required: true
        },
        rua: {
            type: SchemaTypes.String,
            maxlength: 150,
            required: true
        },
        cidade: {
            type: SchemaTypes.String,
            maxlength: 40,
            required: true
        },
        estado: {
            type: SchemaTypes.String,
            maxlength: 2,
            minlength: 2,
            required: true
        }
    },
    paymentStatus: {
        type: SchemaTypes.Boolean,
        default: false
    },
    analistas: [SchemaTypes.ObjectId]
})

const User = mongoose.model("User", userSchema)

export default User