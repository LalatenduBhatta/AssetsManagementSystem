import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    catagory: { type: String, required: true },
    SrlNo: { type: Number, unique: true, required: true },
    model: { type: String },
    imageURL: { type: String },
    assetTag: { type: String, unique: true, required: true },
    status: { type: String, enum: ["available", "assigned", "damaged"] },
    purchasedData: { type: Date },
    warentyExpiryDate: { type: Date },
}, { timestamps: true })

const Asset = mongoose.model("Assets", assetSchema)

export default Asset;