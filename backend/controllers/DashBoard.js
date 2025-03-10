import PostModel from "../models/Blog.js";
import UserModel from "../models/user.js";
import fs from "fs";
import path from "path";

export const GetAllData = async (req, res) => {
  try {
    const User = await UserModel.find();
    const Posts = await PostModel.find();
    if (!User || !Posts) {
      return res.status(404).json({ success: false, message: "No Data Found" });
    }
    return res.status(201).json({ success: true, user: User, posts: Posts });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const GetUser = async (req, res) => {
  try {
    const User = await UserModel.find();
    if (!User) {
      return res.sta(404).json({ success: false, message: "No User Found" });
    }
    return res.status(201).json({ success: true, user: User });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
export const DeleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const findUser = await UserModel.findById(id);
    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not Found" });
    }
    if (findUser.role === "admin") {
      return res
        .status(400)
        .json({ success: false, message: "Admin cant delete User Account" });
    }
    if (findUser.image) {
      const profilepath = path.join("public/images", findUser.image);
      fs.promises
        .unlink(profilepath)
        .then(() => console.log("UserImage Deleted"))
        .catch((error) => console.log("ERROR", error));
    }
    const deleteUser = await UserModel.findByIdAndDelete(id);
    return res
      .status(201)
      .json({
        success: true,
        message: "User Deleted Successfully",
        deleteUser: deleteUser,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
