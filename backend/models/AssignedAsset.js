import { model, Schema } from "mongoose";

const assignedAssetSchema = new Schema({
    assetId: { type: Schema.Types.ObjectId },
    employeeId: { type: Schema.Types.ObjectId },
    assignedAt: { type: Date },
    returnedAt: { type: Date },
    returnedCondition: { type: String },
    note: { type: String }
}, { timestamps: true })


const AssignedAsset = model("AssignedAssets", assignedAssetSchema)

export default AssignedAsset