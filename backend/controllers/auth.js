import UserModel from "../models/user.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register=async(req ,res)=>{
    try {
        const {FullName,email,password}=req.body
        
        
        const userExists=await  UserModel.findOne({email});
        if(userExists)
        {
            return res.status(300).json({success:false,message:"User Already Exists"})
        }
        const imagePath=req.file.filename
        const hashedPassword= await bcrypt.hash(password,15);
        const Newuser=new UserModel({
            FullName,email,password:hashedPassword,profile:imagePath
        })
await Newuser.save()
return res.status(201).json({status:true,message:"User Created Successfully"})
    } catch (error) {
        return res.status(300).json({success:false,message:"Internal Server Error"})
    }
}

export const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password)
        {
            return res.status(300).json({success:false,message:"All fields are required"})
        }
        const findUser= await UserModel.findOne({email});
        if(!findUser)
        {
            return res.status(301).json({status:true,message:"User Doesn't Exists"})
        }
        const correctpassword= await bcrypt.compare(password,findUser.password)
        if(!correctpassword)
        {
            return res.status(301).json({status:false,message:"Invalid Passowrd"})
        }

            const token=jwt.sign({userId:findUser._id},process.env.JWT_SECRET)
            res.cookie("token",token,{
                httpOnly:true,
                secure:false,
                maxAge:3*24*60*60*1000
            })
        return res.status(200).json({success:true,message:"User Logged in SuccessFully..",user:findUser,token })
    } catch (error) {
        return res.status(300).json({status:false,message:"Server Error"})
    }
}

export const Logout=async(req,res)=>{
    try {
       res.clearCookie("token") 
      return res.status(200).json({success:true,message:"Logout Successful."})
    } catch (error) {
        return res.status(500).json({status:false,message:"Internal Server Error"})
    }
}