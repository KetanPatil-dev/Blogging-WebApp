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
import "./index.css";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./ProtectedRoutes";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
      
        <Routes>
          {/* Public Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected User Routes */}
          <Route path="/" element={<ProtectedRoutes><UserLayout /></ProtectedRoutes>}>
          
            <Route index element={<Home />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="profile/:id" element={<Profile />} />
          </Route>

          {/* Protected Admin Routes */}
          <Route path="/dashboard" element={<ProtectedRoutes><AdminLayout /></ProtectedRoutes>}>
            <Route index element={<Dashboard />} />
            <Route path="addpost" element={<AddPost />} />
            <Route path="users" element={<Users />} />
            <Route path="allposts" element={<AllPosts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
