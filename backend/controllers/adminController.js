import Asset from "../models/Asset.js"
import Employee from "../models/Employee.js"

export const assignAsset = async (req, res, next) => {
    try {
        let { assetTag, empId, assignedAt } = req.body
        let isAssetAvailable = await Asset.findOne({ assetTag })
        if (isAssetAvailable?.status == "available") {
            let isEmployee = await Employee.findOne({ empId })
            if (isEmployee) {
                //store the assetId and employeeId and the assignedAt 
            } else {
                throw new Error("Invalid Employee Id")
            }
        } else {
            throw new Error("Invalid Asset Details")
        }
    } catch (error) {
        next(error)
    }
}

export const updateAssignedAsset = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}