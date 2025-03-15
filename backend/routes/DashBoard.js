import express from "express";
import { isAdmin } from "../middleware/isAdmin.js";
import { DeleteUser, GetAllData, GetUser } from "../controllers/DashBoard.js";

const DashBoardRoute=express.Router()

DashBoardRoute.get("/",isAdmin,GetAllData)
DashBoardRoute.get("/users",isAdmin,GetUser)
DashBoardRoute.delete("/delete/:id",isAdmin,DeleteUser)
export default DashBoardRoute