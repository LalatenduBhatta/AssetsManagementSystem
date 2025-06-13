import Asset from "../models/Asset.js"
import AssignedAsset from "../models/AssignedAsset.js"
import Employee from "../models/Employee.js"

export const assignAsset = async (req, res, next) => {
    try {
        let { assetTag, empId, assignedAt } = req.body
        let isAssetAvailable = await Asset.findOne({ assetTag })
        if (isAssetAvailable?.status == "available") {
            let isEmployee = await Employee.findOne({ empId })
            if (isEmployee) {
                //store the assetId and employeeId and the assignedAt 
                const assignedAssetDetails = new AssignedAsset({
                    assetId: isAssetAvailable._id,
                    employeeId: isEmployee._id,
                    assignedAt
                })
                await assignedAssetDetails.save()
                //modify the status of asset
                isAssetAvailable.status = "assigned"
                await isAssetAvailable.save()
                res.status(200).send({ message: "Asset Assigned Successfully" })
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

export const returnAssignedAsset = async (req, res, next) => {
    try {
        const { assetTag, returnedAt, returnedCondition, note } = req.body
        //check the asset
        const isAsset = await Asset.findOne({ assetTag })
        if (isAsset?.status == "assigned") {
            //modify the assignedAsset
            await AssignedAsset.updateOne({ assetId: isAsset._id, returnedAt: null }, {
                $set: { returnedAt, returnedCondition, note }
            })
            //modify the asset status to available
            isAsset.status = "available"
            await isAsset.save()
            return res.status(200).send({ message: "Asset Returned Successfully" })
        } else {
            throw new Error("Invalid Asset Details")
        }
    } catch (error) {
        next(error)
    }
}