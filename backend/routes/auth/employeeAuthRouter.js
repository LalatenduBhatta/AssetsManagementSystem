import express from "express"
import { employeeLogin } from "../../controllers/authController.js"

const employeeAuthRouter = express.Router()


employeeAuthRouter.post("/login", employeeLogin)




export default employeeAuthRouter