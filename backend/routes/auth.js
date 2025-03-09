import express from "express"
import { Login, Register,Logout } from "../controllers/auth.js";
import upload  from "../middleware/Multer.js"
const AuthRoute=express.Router()

AuthRoute.post("/register", upload.single("profile"), Register)
AuthRoute.post('/login',Login)
AuthRoute.post("/logout",Logout)

export default AuthRoute;