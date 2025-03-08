import express from "express"
import { Register } from "../controllers/auth.js";
import upload  from "../Multer.js"
const AuthRoute=express.Router()

AuthRoute.post("/register", upload.single("profile"), Register)

export default AuthRoute;