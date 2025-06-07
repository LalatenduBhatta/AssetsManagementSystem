import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true }
})


const Admin = mongoose.model("Admins", adminSchema)

export default Admin