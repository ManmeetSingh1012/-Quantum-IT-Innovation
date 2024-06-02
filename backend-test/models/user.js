import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const userschema = mongoose.Schema({

   username:{
      type:String,
      required:true,
      index:true,
   
   },


   email:{
      type:String,
      required:true,
      index:true,
      

   },


   password:{
      type:String,
      required:true,
      
      

   },


   dob :{
      type:Date,
      required:true,
      
      

   },

   acesstoken: {
      type: String
   }
   


}, {timestamps:true})




userschema.methods.ispassowrdMatch = async function(password)
{
    return password === this.password ? true : false

}

userschema.methods.genrateAccessToken = function () {
   return jwt.sign(
     {
       _id: this._id,
       email: this.email,
       username: this.username,
       
     },
     process.env.ACCESS_TOKEN_SECRET,
     {
       expiresIn: '30d'
     }
   );
 };

export const User = mongoose.model('User', userschema)