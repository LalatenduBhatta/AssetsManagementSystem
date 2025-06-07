import express from "express"
import { adminLogin } from "../../controllers/authController.js"

const adminAuthRouter = express.Router()

// login
adminAuthRouter.post("/login", adminLogin)




export default adminAuthRouter