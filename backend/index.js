import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./connect.js";
import AuthRoute from "./routes/auth.js"
import cookieparser from "cookie-parser"
dotenv.config();
const app = express();

app.use(cookieparser())
app.use(express.json())
app.use(urlencoded({extended:false}))

const PORT = process.env.PORT || 6989;
app.get("/", (req, res) => {
  console.log("Hello");
});

const startFunc = () => {
  try {
    connectDB();
    app.listen(PORT, () => console.log(`Server Started on PORT:${PORT}`));
     app.use("/auth",AuthRoute)
  } catch (error) {
    console.log("ERROR", error);
  }
};

startFunc();
