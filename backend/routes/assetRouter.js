import express from "express"
import { addAsset, deleteAsset, getAllAssets, updateAsset } from "../controllers/assetController.js"
import { adminVerify } from "../middlewares/adminVerify.js"

const assetRouter = express.Router()

//get all assets
assetRouter.get("/all", getAllAssets)

// add asset
assetRouter.post("/add", adminVerify, addAsset)

//update asset
assetRouter.put("/update", adminVerify, updateAsset) // http://localhost:8000/api/asset/update?id=1235485

//delete asset
assetRouter.delete("/delete/:id", adminVerify, deleteAsset) // http://localhost:8000/api/asset/delete/123563




export default assetRouter