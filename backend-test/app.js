import express, { urlencoded } from 'express';
const app = express();
import cors from 'cors';

app.use(express.json({
      limit: '50mb'
}));

app.use(express.urlencoded({ extended: true }));

app.use(cors({
      origin: 'http://localhost:5173',
      credentials: true

}))


import userrouter from './routes/routes.user.js';

app.use('/api/v1/user', userrouter);


app.get('/', (req, res) => { 
   console.log("welcome to the backend app")
   res.json({message: "welcome to the backend app"})
})
export default app;