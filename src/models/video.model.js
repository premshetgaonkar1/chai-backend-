import mongoose, {Schema} from "mongoose"

const videoSchema =new Schema(
    {

        videoFile:{
            type:String,
            required:true,

        },
        title:{
            type:String,
            required:true,

        },
        thumbnail:{
            type:String,
            required:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"user"
        },
        description:{
            type:String,
            trim:true
        },
        duration:{
            type:Number,//cloudinary
            
        },
        views:{
            type:Number,
            default:0,
            
        },
        isPublished:{
            type:Boolean,
            default:true

        }
    },{
        timestamps:true
    }

) 

export const Video= monogoose.model("Video",videoSchema)