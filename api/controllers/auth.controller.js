import User from "../models/user.model.js"

export  const signUp = async(req,res,next)=>{
  const {username,email,password} = req.body;
  const newUser = new User({username,email,password});
    
  try{
    await newUser.save();
     res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch(error){
    console.log(error);
  }
}

export const signIn = async(req,res,next)=> {
    const {email,password} = req.body;
    try{
        const user =  await User.findOne({ email });
        if(user && user.password==password){
            res.status(201).json({
      success: true,
      message: "User created successfully",
        });
        }
    }catch(error){
        console.log(error);
    }
}

