import React from 'react'
import { FaHome, FaPlusSquare} from "react-icons/fa";
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
    </ul>
  </div>
    </div>
    
    </>
  )
}

export default  SideBar