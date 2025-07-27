import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
import { errorHandler } from "../utils/errorHandler.js";

export  const signUp = async(req,res,next)=>{
  const {username,email,password} = req.body;
  const hashedPassword = await bcryptjs.hash(password,10);
  const newUser = new User({username,email,password:hashedPassword});
    
  try{
    await newUser.save();
     res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch(error){
     next(error);
  }
}

export const signIn = async(req,res,next)=> {
    const {email,password} = req.body;
    try{
        const validUser =  await User.findOne({ email });
        if(!validUser){
           return next(errorHandler(404,'user not found'))
        }

        const isPasswordCorrect = await bcryptjs.compare(password,validUser.password);
        if(!isPasswordCorrect) {
             return next(errorHandler(401,'invalid password'))
        }
       
          const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
          const {password: pass,...rest} = validUser._doc;
            res.cookie('accessToken',token,{httpOnly:true}).status(200).json({
      success: true,
      user:rest
        });
        
    }catch(error){
        next(error);
    }
}

export const google = async(req,res,next)=>{
     const {username,email,photo} = req.body;
     try{
      const user = await User.findOne({email});
      if(user){
         const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
         const {password,...rest} = user._doc;
         return res
         .cookie('accessToken',token,{httpOnly:true})
         .status(200)
         .json({success:true,user:rest});
      }
      const generatePassword =  Math.random().toString(36)+Math.random().toString(36).slice(-8);
      const hashedPassword = await bcryptjs.hash(generatePassword,10);
      const newUser = new User({username,email,password:hashedPassword,avatar:photo});
      await newUser.save();
      const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET);
       const {password,...rest} = newUser._doc;
      return res.cookie('accessToken',token,{httpOnly:true}).status(200).json({success:true,user:newUser._doc})
     } catch(error){
      next(error);
     }
}

