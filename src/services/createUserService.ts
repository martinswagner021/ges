import { hash } from "bcrypt";
import User from "../models/User.js";

export default async function createUserService(username: string, password: string){

    if ( await User.findOne({"username": username}) ){
        throw new Error("This user already exists.")
    }

    const hashed_password = await hash(password, 10)

    const createdUser = await User.create({
        username: username,
        password: hashed_password
    })

    await createdUser.save()

    createdUser.password = undefined

    return createdUser
}