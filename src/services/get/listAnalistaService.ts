import Analista from "../../models/Analista.js"

export default async function listAnalistaService(){
    const analistas = await Analista.find()
    return analistas
}