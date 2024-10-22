import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"  



const connectDB = async()=>{

     try {
         
        const conenctionInstance= await 
        
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n MONGODB connected successfully DB_HOST:${conenctionInstance.connection.host}`);

        
     } catch (error) {
        console.error("MONGODB connection failed ",error.message);
        process.exit(1);
     }
}

export default connectDB