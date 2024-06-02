import express from 'express';
import app from './app.js';

import dotenv from 'dotenv';
dotenv.config({ path: './.env' });


import { connectDB } from './mongodb.js';


connectDB().then(  () => {
      app.listen( process.env.PORT || 3000, () => { 

            console.log(`Server is running on port ${process.env.PORT}`);  
      })
}).catch( (error) => {

      console.log(`Error: ${error.message}`);
})
