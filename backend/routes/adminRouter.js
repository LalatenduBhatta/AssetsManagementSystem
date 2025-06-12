import express from "express"
import { assignAsset, updateAssignedAsset } from "../controllers/adminController.js"

const adminRouter = express.Router()


//assign asset
adminRouter.post("/assign/asset", assignAsset)

//update assigned asset
adminRouter.put("/update/asset", updateAssignedAsset)



export default adminRouter