import { hash } from "bcrypt";
import User from "../models/User.js";

export default async function createUserService(username: string, password: string){

    const [userAlreadyExists, hashed_password] = await Promise.all([
        User.findOne({"username": username}),
        hash(password, 10)
    ])

    if (userAlreadyExists){
        throw new Error("This user already exists.")
    }

    const createdUser = await User.create({
        username: username,
        password: hashed_password
    })

    await createdUser.save()

    createdUser.password = undefined

    return createdUser
}