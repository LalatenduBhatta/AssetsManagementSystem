import Admin from "../models/Admin.js"
import Employee from "../models/Employee.js"
import { generateToken } from "../utils/jwt.js"

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const isAdmin = await Admin.findOne({ email })
            if (isAdmin) {
                if (password === isAdmin.password) {
                    //send the admin id as a token in cookies
                    const token = generateToken({ id: isAdmin._id })
                    res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true })
                    res.status(200).send({ message: "Login Successful" })
                } else {
                    throw new Error("Password Not Matched")
                }
            } else {
                throw new Error("User Details Not Found")
            }
        } else {
            throw new Error("Provide All Fields")
        }
    } catch (error) {
        next(error)
    }
}


export const employeeLogin = async (req, res, next) => {
    try {
        const { email, password, empId } = req.body
        if (password && email || empId) {
            let isEmployee;
            if (email) {
                isEmployee = await Employee.findOne({ email })
            } else {
                isEmployee = await Employee.findOne({ empId })
            }
            if (isEmployee) {
                if (password === isEmployee.password) {
                    //send the admin id as a token in cookies
                    const token = generateToken({ id: isEmployee._id })
                    res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true })
                    res.status(200).send({ message: "Login Successful" })
                } else {
                    throw new Error("Password Not Matched")
                }
            } else {
                throw new Error("User Details Not Found")
            }
        } else {
            throw new Error("Provide All Fields")
        }
    } catch (error) {
        next(error)
    }
}