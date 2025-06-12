import { model, Schema } from "mongoose";

const assignedAssetSchema = new Schema({
    assetId: { type: Schema.Types.ObjectId },
    employeeId: { type: Schema.Types.ObjectId },
    assignedAt: { type: Date, default: Date.now() },
    returnedAt: { type: Date, default: null },
    returnedCondition: { type: String, default: null },
    note: { type: String, default: null }
}, { timestamps: true })


const AssignedAsset = model("AssignedAssets", assignedAssetSchema)

export default AssignedAsset