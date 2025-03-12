import mongoose from "mongoose";

const comentSchema= new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Posts",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    comment:{
        type:String,
        required:true
    }
},{timestamps:true})

const CommentModel=mongoose.model("Comments",comentSchema);
export default CommentModel;