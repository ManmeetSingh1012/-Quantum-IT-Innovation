
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";


 // || req.header("Authorization")?.replace("Bearer ","")

export const verifyjwt = async (req , register , next) =>{

   try {

   
      const token =  req.header("Authorization")?.replace("Bearer ","")
      console.log("token jwt",token)

      if(!token)
      {
         res.status(401).json({ 

            success:false,
            message:"Unauthorized Reaquest or token does not exist"
         
         })

         return;
      }
      const secret_token  = process.env.ACCESS_TOKEN_SECRET 

      const data = jwt.verify(token, secret_token) 
      const user = await User.findById({_id : data._id}) 

      if(!user)
      {
         res.status(401).json({
            success:false,
            message:"Unauthorized Request | user not found or wrong or expired token"
         })
      }

      req.user = user 

      next()



   }catch(error)
   {
      if(error instanceof Error)
      {
         console.log("errors",error.message)
         //throw error
      }
   }
}