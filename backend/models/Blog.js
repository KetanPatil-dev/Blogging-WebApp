import mongoose from "mongoose";

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String
    },
    image:{
        type:String
    }
},{timestamps:true})

const PostModel= mongoose.model("Posts",PostSchema);
export default PostModel;