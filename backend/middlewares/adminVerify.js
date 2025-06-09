import Admin from "../models/Admin.js"
import { verifyToken } from "../utils/jwt.js"

export const adminVerify = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const { id } = verifyToken(token)
        //check the id is valid or not
        const isAdmin = Admin.findById(id)
        if (isAdmin) {
            next()
        } else {
            throw new Error("Invalid Admin Credential")
        }
    } catch (error) {
        next(error)
    }
}