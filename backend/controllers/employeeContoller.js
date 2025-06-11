import Employee from "../models/Employee.js"
import { sendEmail } from "../utils/nodemailer.js"

export const addEmployee = async (req, res, next) => {
    try {
        const employeeDetails = new Employee(req.body)
        await employeeDetails.save()
        await sendEmail({
            to: employeeDetails.email,
            subject: "Your Employee Credentials Created Successfully",
            text: `Hi ${employeeDetails.name},
                         Welcome to our company 
                    You can login to the company website using these details
                    empId=${employeeDetails.empId},
                    password=${employeeDetails.password}`
        })
        res.status(201).send({ message: "Employee added" })
    } catch (error) {
        next(error)
    }
}