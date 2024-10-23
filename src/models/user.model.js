import mongoose, {Schema} from "mongoose"
import argon2 from "argon2"
import jwt from "jsonwebtoken"

const userSchema=new Schema(
    {
        usename:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true

        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
           

        }, 
        password:{
            type:String,
            required:[true,'Passowrd is required']
            
        },
        fullname:{
            
            type:String,
            required:true,
            trim:true,
            index:true

        },
        avatar:{
            type:String,//cloudinary url
            required:true,
           
        },
        coverImage:{
            type:String,//cloudinary url
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        refreshToken:{
            type:String,

        }


    },
    
{timestamps:true})

userSchema.pre("save",async function(next){

    if(!this.isModified("password")) return next()
     try {
    
    this.password=await argon2.hash(this.password,)
    next();//cannot use arrow fuctions as we cannot use this keyword 

     } catch (error) {
        console.error("error while hashing password",error.message)
        next(error)
        
     }   

    
})

userSchema.methods.isPasswordCorrect= async function(password){
    try {
 return await argon2.verify(this.password,password);


}
    catch (error) {
    return false;
}
}

userSchema.methods.generateAccessToken= async function(){

    return await jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname


    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }

);
}
userSchema.methods.generateRefreshToken= async function(){

    return await jwt.sign({
        _id:this._id,
       
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }

);

}

export const User = mongoose.model("User",userSchema);