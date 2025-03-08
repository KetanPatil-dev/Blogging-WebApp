import UserModel from "../models/user.js"
import bcrypt from "bcryptjs";
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