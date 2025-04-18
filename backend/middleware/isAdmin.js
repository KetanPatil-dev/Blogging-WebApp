import jwt from "jsonwebtoken"
import UserModel from "../models/user.js"
import PostModel from "../models/Blog.js"

export const isAdmin=async(req,res,next)=>{
    try {
        const token=req.cookies.token
        if(!token)
        {
            return res.status(400).json({success:false,message:"Invalid User"})
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        const user=await UserModel.findById(decoded.userId)
        if(!user)
        {
            return  res.status(404).json({success:false,message:"User not found"})
        }
        if(user.role!=="admin")
            {
                return res.status(400).json({success:false,message:"User is Not admin"})
            }
            next()
        
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
            
    }
}

export const GetPost=async(req,res)=>{
    try {
        const posts=await PostModel.find()
        if(!posts){
            return res.status(404).json({success:false,message:"No Posts Found"})
        }
        return res.status(201).json({success:true,posts})
        
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

export const isLogin= async(req,res,next)=>{
    try {
         const token=req.cookies.token;
         if(!token)
         {
            return res.status(400).json({status:false,message:"Token Not Found"})
         }
         const decoded=jwt.verify(token,process.env.JWT_SECRET)
         const user=await UserModel.findById(decoded.userId)
         if(!user)
            {
                return  res.status(404).json({success:false,message:"User not found"})
            }
            req.user=user
            next()
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
            
    }
}
export const Verification=async(req,res)=>{
    try {
        const token=req.cookkies.token
        console.log(token)
        console.log(token)
        if(!token)
        {
            return res.status(404).json({success:false,message:"Token not Found"})
            
        }
        const user=await UserModel.findById(decoded.userId)
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded)
        req.user=decoded
        next()

        
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}