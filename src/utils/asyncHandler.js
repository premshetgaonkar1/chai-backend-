const asyncHandler= (requestHandler)=>{

    return (req,res,next)=>{
          Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

   
export {asyncHandler}





// const asyncHandler= (fn)=> async()=>{

//     try {

//         await fn(req,res,next)//execute the function

        
//     } catch (error) {
//         res.status(err.code||400).json({
//             success:false ,
//             message:error.message
//         })
        
//     }

// }