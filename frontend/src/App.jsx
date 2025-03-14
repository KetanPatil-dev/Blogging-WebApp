import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserLayout from "./Layout/UserLayout";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AddPost from "./pages/Admin/AddPost";
import Users from "./pages/Admin/Users";
import AllPosts from "./pages/Admin/AllPosts";
import "./index.css"
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="profile/:id" element={<Profile />} />
          </Route>
          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="addpost" element={<AddPost />} />
            <Route path="users" element={<Users />} />
            <Route path="allposts" element={<AllPosts />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
