// Custom ApiError and Custom ApiResponse

class ApiError extends Error {

    constructor(
        statusCode,
        message = "something went wrong",
        error = [], // A list of additional errors
        stack = ""  // A stack trace (a detailed error location)
    ){

        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.error = error

        if (stack) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}