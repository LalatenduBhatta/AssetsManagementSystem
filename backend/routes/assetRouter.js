import express from "express"
import { addAsset } from "../controllers/assetController.js"
import { adminVerify } from "../middlewares/adminVerify.js"

const assetRouter = express.Router()

//get all assets
assetRouter.get("/all")

// add asset
assetRouter.post("/add", adminVerify, addAsset)

//update asset
assetRouter.put()

//delete asset
assetRouter.delete()




export default assetRouter