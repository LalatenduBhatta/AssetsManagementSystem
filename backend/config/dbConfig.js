import mongoose from "mongoose"
import { config } from "dotenv"
config()
const dbURL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/AssetsManagementSystem"


const dbConnect = async () => {
    try {
        await mongoose.connect(dbURL)
        console.log("mongo database connected")
    } catch (error) {
        console.log("Db connection error :", error.message)
    }
}

export default dbConnect;