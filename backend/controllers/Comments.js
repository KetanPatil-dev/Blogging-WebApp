import PostModel from "../models/Blog.js";
import CommentModel from "../models/comments.js";

export const AddComment =async(req ,res)=>{
    try {
        const {postId,userId,comment}=req.body;
        const newComment=await new CommentModel({
            postId,userId,comment
        })
        await newComment.save(); 
        const PostExists=await PostModel.findById(postId)
        if(!PostExists)
        {
            return res.status(404).json({success:false,message:"Post not found"})
        }
        PostExists.comments.push(newComment._id)
        await PostExists.save();
        return res.status(201).json({success:true,message:"Comment Added Successfully",comment:newComment.comment })
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
             
    }
}