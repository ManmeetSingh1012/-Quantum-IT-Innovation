import { User } from "../models/user.js"



const genrate_token = async (id)  =>{

   
   try {
      const user = await User.findById(id)  ; // Ensure TypeScript knows this is an IUser
    if (!user) {
      throw new Error("User not found");

    }

    const accesstoken = user.genrateAccessToken();

    user.acesstoken = accesstoken;

    // After changing the access token, save the user without validation
    await user.save({ validateBeforeSave: false });

    return accesstoken;
   }
   catch (error) {
      if(error instanceof Error)
     { throw error}
   }
}
const register = async (req, res) => {

   try{

      const {username, email, password , dob} = req.body;
      if(!username || !email || !password || !dob)
      {
         return res.status(400).json({message: "All fields are required"})
      }
      const userExists = await User.findOne({email})
      if(userExists)
      {
         return res.status(400).json({message: "User already exists"})
      }
      const user = await User.create({username, email, password , dob})
      
      const acesstoken = await genrate_token(user._id)
      console.log("token",acesstoken)

      const newuser = await User.findById( {_id : user._id})

      if(newuser)
      {
         return res.status(201).json({message: "User created successfully","user": newuser})
      }
      else
      {
         return res.status(500).json({message: "Failed to create user"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(500).json({message: error.message})
      }
   }
 }

const login = async (req, res) => {

   try {

      const {email, password} = req.body;
      if(!email || !password)
      {
         return res.status(400).json({message: "All fields are required"})
      }

      

      const user = await User.findOne({email})

      if(!user)
      {
         return res.status(400).json({message: "Invalid credentials"})
      }

      const isMatch = await user.ispassowrdMatch(password)

      const acesstoken = await genrate_token(user._id)
      console.log("token",acesstoken)

      const newuser = await User.findById( {_id : user._id})

      if(!isMatch)
      {
         return res.status(400).json({message: "Invalid credentials"})
      }else{
         return res.status(200).json({message: "Login successful","user": newuser})
      }



   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(500).json({message: error.message})
      }
   }
 }

 const remove = async (req, res) => {


   try{
         
         
         const id = req.params.id
         const user = await User.deleteOne({_id: id}) 
         if(user)
         {
            return res.status(200).json({message: "User deleted successfully"})
         }else{
            return res.status(404).json({message: "User not found"})
         }
   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(500).json({message: error.message})
      }
   }

 }

const get = async (req, res) => {
   try{

      
      const id = req.user._id
      const user = await User.findOne({_id: id})

      if(user)
      {
         return res.status(200).json(user)
      }else{
         return res.status(404).json({message: "Users not found"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(500).json({message: error.message})
      }
   }
 }
const getAll = async (req, res) => {

   try{

      
      
      const user = await User.find()

      if(user)
      {
         return res.status(200).json(user)
      }else{
         return res.status(404).json({message: "Users not found"})
      }


   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(500).json({message: error.message})
      }
   }
 }
const logout = async (req, res) => { 

   try{

      const id = req.user._id
      const update = await User.findByIdAndUpdate(
         {_id : id},{
            $set:{
               acesstoken : ""
            }
         },
            {
               new:true
            }
         
      ).select("-password") 


      
  

     return res
     .status(200)
     
     .json({
           
             update
        
     })


      
   }
  catch(error)
  {
     if(error instanceof Error)
     {
        console.log("error",error.message)
        throw error
     }
  }
}

export  { register, login,  remove, get, getAll, logout }