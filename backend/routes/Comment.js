import express from "express";
import { AddComment } from "../controllers/Comments.js";
import { isLogin } from "../middleware/isAdmin.js";
const CommentsRoute=express.Router();


CommentsRoute.post("/addcomment",isLogin,AddComment)
export default CommentsRoute