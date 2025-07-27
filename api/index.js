import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js' 
import cookieParser from 'cookie-parser'
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
app.use(cookieParser())

app.use('/api/auth',authRouter);


app.use((err,req,res)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error"
  res.status(statusCode).json({
    success : false,
    message
  });
});
app.listen(4000,()=>{
    console.log('server is running on port 4000')
})