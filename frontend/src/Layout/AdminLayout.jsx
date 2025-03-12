import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'

const AdminLayout = () => {
  return (
    <>
        <NavBar/>
        <div className='d-flex'>
            <SideBar/>
            <div className='flex-grow-1 p-4'>

        <Outlet/>
            </div>
        </div>
    </>
  )
}

export default AdminLayout