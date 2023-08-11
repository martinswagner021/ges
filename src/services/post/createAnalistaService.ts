import Analista from "../../models/Analista.js";

interface IAnalistaRequest{
    nome: string,
    cpf: string
}

export default async function createAnalistaService(
    { nome, cpf }: IAnalistaRequest
){
    const analistaAlreadyExists = await Analista.findOne({$or: [{nome}, {cpf}]})
    if (analistaAlreadyExists){
        throw new Error("Este analista já existe.")
    }
    else{
        const createdAnalista = await Analista.create({
            nome,
            cpf
        })
        await createdAnalista.save()
        return createdAnalista
    }
}