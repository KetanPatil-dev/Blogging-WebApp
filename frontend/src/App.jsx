import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Post from './pages/Post'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post/:id" element={<Post/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="profile/:id" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
