import PostModel from "../models/Blog.js"

export const GetSinglePost=async (req ,res)=>{
    try {
        const {id}=req.params
        const FindPost=await PostModel.findById(id)
        .populate({
            path:"comments",
            populate:{
                path:"userId"
            }
        })

        if(!FindPost){
            return res.this.status(404).json({success:false,message:"Blog Post not Found"})
        }
        return res.status(201).json({success:true,post:FindPost})

    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}
