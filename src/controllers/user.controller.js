import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiErrors } from "../utils/ApiErrors.js";
import {User} from "../models/user.model.js"

const registerUser = asyncHandler(async(req,res)=>{
    
    const {fullname,email,password,username}=req.body;
    console.log(req.body);
    

    if(
        [fullname,email,password,username].some((field)=>field?.trim()==="")
    )//if field is present then trim it and if it is still empty then it will return true 
    {

        throw new ApiErrors(400,"All fields are required");
    }

    User.findOne({
        $or:[{email},{username}]
    })


})


export {registerUser}