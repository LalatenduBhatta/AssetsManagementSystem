import Admin from "../models/Admin.js"
import Employee from "../models/Employee.js"
import { generateToken, verifyToken } from "../utils/jwt.js"

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const isAdmin = await Admin.findOne({ email })
            if (isAdmin) {
                if (password === isAdmin.password) {
                    //send the admin id as a token in cookies
                    const token = generateToken({ id: isAdmin._id, role: "admin" })
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
                    const token = generateToken({ id: isEmployee._id, role: "employee" })
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


export const getAuthStatus = async (req, res, next) => {
    try {
        const { token } = req.cookies
        const { id, role } = verifyToken(token)
        if (role == "admin") {
            //get the admin data
            const adminDetails = await Admin.findById(id, { _id: 0, password: 0 })
            return res.status(200).send(adminDetails)
        } else if (role == "employee") {
            //get the employee data
            const employeeDetails = await Employee.findById(id, { _id: 0, password: 0, __v: 0 })
            return res.status(200).send(employeeDetails)
        }
    } catch (error) {
        next(error)
    }
}

export const logout = async (req, res, next) => {
    try {
        res.clearCookie("token")
        return res.status(200).send({ message: "Logout Successful" })
    } catch (error) {
        next(error)
    }
}
