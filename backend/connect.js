import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Blogging-app')
        console.log("MongoDB Connected Successfully...")
    } catch (error) {
        console.log("ERROR",error)
    }
}

export default connectDB;