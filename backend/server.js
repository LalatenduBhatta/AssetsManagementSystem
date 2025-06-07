import express from "express"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
//dotenv configuration
import { config } from "dotenv"
import dbConnect from "./config/dbConfig.js"
import adminRouter from "./routes/adminRouter.js"
import assetRouter from "./routes/assetRouter.js"
import employeeRouter from "./routes/employeeRouter.js"
import adminAuthRouter from "./routes/auth/adminAuthRouter.js"
import employeeAuthRouter from "./routes/auth/employeeAuthRouter.js"
import errorHandler from "./middlewares/errorHandeling.js"
config()

//server declaration
const app = express()

//middlewares
app.use(express.json()) //json parser
app.use(express.urlencoded({ extended: true }))//url data parser
app.use(cookieParser()) //cookie data parser
app.use(cors()) //cors policy resolve
app.use(morgan("dev")) //http logger

//demo route
app.get("/", (req, res) => res.send({ message: "Server is Working" }))

//routes
app.use("/api/admin", adminRouter)
app.use("/api/asset", assetRouter)
app.use("/api/emplyoee", employeeRouter)
app.use("/api/auth/admin", adminAuthRouter)
app.use("/api/auth/employee", employeeAuthRouter)

//error bounding
app.use(errorHandler)


//db connection
dbConnect()

//server listening
const port = process.env.SERVER_PORT || 3000
app.listen(port, () => {
    console.log("server is running in port " + port)
})