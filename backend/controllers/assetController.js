import Asset from "../models/Asset.js"

export const addAsset = async (req, res, next) => {
    try {
        const assetDetails = new Asset(req.body)
        await assetDetails.save()
        res.status(201).send({ message: "Asset added" })
    } catch (error) {
        next(error) //calls the error handling middleware
    }
}