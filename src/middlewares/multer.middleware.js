import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.resolve("public","temp")); //"./public/temp")
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null,file.originalname)//here we r using file.originalname as required for this project if we want can change later 
    
    }
  })
  
  export const upload = multer(
    { storage, 
        
    })


