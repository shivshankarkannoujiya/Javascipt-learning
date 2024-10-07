// Custom ApiResponse 

class ApiResponse {

    constructor(
        statusCode,
        data,
        message = "Success"
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}



// Example 

function getUser(userId){
    if (userId === 1) {
        return new ApiResponse(
            200,
            {id: 1, name: "John Doe"},

        )
    }else{

        return new ApiResponse(
            404,
            null,
            "User not Found"
        )
    }
}

// Calling function 
const responseOne = getUser(1)
// console.log(responseOne)

const responseTwo = getUser(0)
console.log(responseTwo)


