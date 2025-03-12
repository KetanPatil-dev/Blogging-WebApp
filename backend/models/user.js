import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    FullName:{
        type:String
    },
    email:{
        type:String
    },
    profile:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
},{timestamps:true})

const UserModel= mongoose.model("Users",UserSchema);
export default UserModel;