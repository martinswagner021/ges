import { Schema, SchemaTypes } from "mongoose"
import mongoose from "../db/connect.js"

const analistaSchema = new Schema({
    nome: {
        type: SchemaTypes.String,
        required: true
    },
    cpf: {
        type: SchemaTypes.String,
        required: true
    }
})

const Analista = mongoose.model("Analista", analistaSchema)

export default Analista