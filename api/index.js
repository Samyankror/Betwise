import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js' 

dotenv.config();
const app = express();

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log('mongodb connected successfully');
    })
    .catch((err)=>{
        console.log(err);
    })
    
app.use(express.json());

app.use('/api/auth',authRouter);
app.listen(4000,()=>{
    console.log('server is running on port 4000')
})