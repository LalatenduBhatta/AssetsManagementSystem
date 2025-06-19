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
import errorHandler from "./middlewares/errorHandeling.js"
import authRouter from "./routes/authRouter.js"
config()

//server declaration
const app = express()

//middlewares
app.use(express.json()) //json parser
app.use(express.urlencoded({ extended: true }))//url data parser
app.use(cookieParser()) //cookie data parser
app.use(cors(
    {
        origin: 'http://localhost:5173', // frontend URL
        credentials: true, // 👈 important for cookies
    }
)) //cors policy
app.use(morgan("dev")) //http logger

//demo route
app.get("/", (req, res) => res.send({ message: "Server is Working" }))

//routes
app.use("/api/admin", adminRouter)
app.use("/api/asset", assetRouter)
app.use("/api/emplyoee", employeeRouter)
app.use("/api/auth", authRouter)

//error bounding
app.use(errorHandler)


//db connection
dbConnect()

//server listening
const port = process.env.SERVER_PORT || 3000
app.listen(port, () => {
    console.log("server is running in port " + port)
})