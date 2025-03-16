import express from "express";
import { Create, DeletePost, UpdatePost } from "../controllers/Blog.js";
import { GetPost, isAdmin, Verification } from "../middleware/isAdmin.js";
import upload from "../middleware/Multer.js";
const BlogsRoutes=express.Router()

BlogsRoutes.post("/create",Verification,isAdmin,upload.single("postimage"),Create)
BlogsRoutes.delete("/delete/:id",isAdmin,DeletePost);
BlogsRoutes.get("/getposts",GetPost)
BlogsRoutes.patch("/update/:id",isAdmin,upload.single("postimage"),UpdatePost)

export default BlogsRoutes;