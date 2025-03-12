import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./connect.js";
import AuthRoute from "./routes/auth.js"
import cookieparser from "cookie-parser"
import BlogsRoutes from "./routes/Blog.js";
import DashBoardRoute from "./routes/DashBoard.js";
import CommentsRoute from "./routes/Comment.js";
import PublicRoutes from "./routes/public.js";
dotenv.config();
const app = express();

app.use(express.static("public"));
app.use(cookieparser())
app.use(express.json())
app.use(urlencoded({extended:false}))

const PORT = process.env.PORT || 7989;
app.get("/", (req, res) => {
  console.log("Hello");
});

const startFunc = () => {
  try {
    connectDB();
    app.listen(PORT, () => console.log(`Server Started on PORT:${PORT}`));
     app.use("/auth",AuthRoute)
     app.use("/blog",BlogsRoutes)
     app.use("/dashboard",DashBoardRoute)
     app.use("/comments",CommentsRoute)
     app.use("/public",PublicRoutes)
  } catch (error) {
    console.log("ERROR", error);
  }
};

startFunc();
