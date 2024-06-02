import mongoose from 'mongoose';


export const connectDB = async () => {


   try{

      const instance = await mongoose.connect(process.env.MONGO_URI)
      console.log(`mongodb connected: ${instance.connection.host}`)
   }catch(error)
   {
      console.log("Error: ${error.message}")
   }

}

