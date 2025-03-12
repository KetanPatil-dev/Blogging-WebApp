import React from 'react'
import { FaHome, FaPlusSquare, FaUsers,FaFileAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';


const  SideBar = () => {
  return (
    <>
    <div className='bg-dark text-white vh-100' style={{width:"250px"}}>
  <div className='p-3'>
    <ul className='nav-flex-column'>
      <li className='nav-item mb-3'>
        <Link to={"/dashboard"} className='nav-link text-white'>
      <FaHome className='me-2'/>  DashBoard
      </Link> </li>
      <li className='nav-item mb-3'>
        <Link to={"/dashboard/addpost"} className='nav-link text-white'>
      <FaPlusSquare className='me-2'/>  Add Post
      </Link> </li>
      <li className='nav-item mb-3'>
        <Link to={"/dashboard/users"} className='nav-link text-white'>
      <FaUsers className='me-2'/>  Users
      </Link> </li>
      <li className='nav-item mb-3'>
        <Link to={"/dashboard/allposts"} className='nav-link text-white'>
      <FaFileAlt className='me-2'/>  All Posts
      </Link> </li>
    </ul>
  </div>
    </div>
    
    </>
  )
}

export default  SideBar