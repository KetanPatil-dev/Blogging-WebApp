import PostModel from "../models/Blog.js"

export const Create=async(req ,res)=>{
    try {
const {title,desc}=req.body
const imagePath=req.file.filename
        if(!title || !desc)
        {
            return res.status(300).json({success:false,message:"All fields are required"})
        }
        const CreateBlog=new PostModel({
            title,desc,image:imagePath
        })
        await CreateBlog.save()
        return res.status(201).json({success:true,message:"Post created Successfully",post:CreateBlog})
    } catch (error) {
    return res.status(500).json({success:false,message:"Internal Server Error"})
    }

}