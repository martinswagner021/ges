import mongoose from "mongoose"

await mongoose.connect(process.env.DB_URI)

const db = mongoose.connection

db.on("error", (e) => console.log(e.message))
db.on("connection", () => console.log('Succesfully connected to DB.'))

export default db