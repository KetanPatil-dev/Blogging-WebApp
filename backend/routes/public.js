import express from "express"
import { GetSinglePost } from "../controllers/Public.js";

const PublicRoutes=express.Router()

PublicRoutes.get("/singlepost/:id",GetSinglePost)
export default PublicRoutes;