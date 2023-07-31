import User from "../models/User.js";

async function createUser(username: String, password: String){
    const user = await User.create({
        username: username,
        password: password
    })

    user.save()

    return user
}

export default createUser