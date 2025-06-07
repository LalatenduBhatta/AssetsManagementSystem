

const errorHandler = (error, req, res, next) => {
    // console.log(error.message)
    let statusCode = 500
    if (error.message == "Password Not Matched") {
        statusCode = 401
    } else if (error.message == "User Details Not Found") {
        statusCode = 400
    } else if (error.message == "Provide All Fields") {
        statusCode = 400
    }
    return res.status(statusCode).send({ error: error.message })
}


export default errorHandler;