import express from "express";
import { Create, DeletePost } from "../controllers/Blog.js";
import { GetPost, isAdmin } from "../middleware/isAdmin.js";
import upload from "../middleware/Multer.js";
const BlogsRoutes=express.Router()

BlogsRoutes.post("/create",isAdmin,upload.single("postimage"),Create)
BlogsRoutes.delete("/delete/:id",isAdmin,DeletePost);
BlogsRoutes.get("/getposts",GetPost)

export default BlogsRoutes;