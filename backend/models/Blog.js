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
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments"
    }]
},{timestamps:true})

const PostModel= mongoose.model("Posts",PostSchema);
export default PostModel;