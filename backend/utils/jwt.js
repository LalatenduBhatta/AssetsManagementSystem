import jwt from "jsonwebtoken"
import { config } from "dotenv"
config();

const secretKey = process.env.JWT_SECRET || "My Secret Key"

export const generateToken = (payload, expireTime = "7d") => {
    try {
        return jwt.sign(payload, secretKey, { expiresIn: expireTime })
    } catch (error) {
        throw error
    }
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        throw error
    }
}