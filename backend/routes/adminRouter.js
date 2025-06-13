import express from "express"
import { assignAsset, returnAssignedAsset } from "../controllers/adminController.js"

const adminRouter = express.Router()


//assign asset
adminRouter.post("/assign/asset", assignAsset)

//update assigned asset
adminRouter.put("/return/asset", returnAssignedAsset)



export default adminRouter