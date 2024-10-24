// Handling errors in API-driven applications often requires more details, such as 
// response codes and validation errors. This class structure allows you to provide
//  a rich error response, which can then be used for better error handling or logging.







class ApiErrors extends Error{
    constructor(statusCode,
    message="something went wrong",
    errors=[],
    stack=""


    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
        
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}

export {ApiErrors}