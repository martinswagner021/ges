import { hash } from "bcrypt";
import User from "../models/User.js";

interface IUserRequest{
    email: string,
    password: string,
    telefone: string,
    cnpj: number,
    endereco: {
        cep: number,
        rua: string,
        cidade: string,
        estado: string
    }
}

export default async function createUserService(
    { email, password, telefone, cnpj, endereco } : IUserRequest
    ){

    const [userAlreadyExists, hashed_password] = await Promise.all([
        User.findOne({"email": email}),
        hash(password, 10)
    ])

    if (userAlreadyExists){
        throw new Error("This user already exists.")
    }

    const createdUser = await User.create({
        email,
        password: hashed_password,
        telefone,
        cnpj,
        endereco
    })

    await createdUser.save()

    createdUser.password = undefined

    return createdUser
}